
import React, { useContext, useEffect, useState } from 'react';
import PhotoComponent from '../components/PhotoComponent';
import { LikesContext } from '../components/LikeContext';

const Favorites = () => {
    const [favoritePhotos, setFavoritePhotos] = useState([]);
    const { likes } = useContext(LikesContext);

    useEffect(() => {
        fetch('/photos.json')
            .then(response => response.json())
            .then(data => {
                const filteredPhotos = data.photos.filter(photo => likes.includes(photo.id));
                setFavoritePhotos(filteredPhotos);
            });
    }, [likes]);

    return (
        <div>
            <h1>Fotos favoritas</h1>
            <div className="p-3 gallery grid-columns-4">
                {favoritePhotos.map(photo => (
                    <PhotoComponent
                        key={photo.id}
                        photo={photo}
                        isLiked={true}
                        onLike={() => {}}
                        onUnlike={() => {}}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
