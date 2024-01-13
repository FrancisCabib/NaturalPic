// Gallery.jsx
import React, { useEffect, useState, useContext } from 'react';
import PhotoComponent from './PhotoComponent';
import { LikesContext } from '../components/LikeContext';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const { likes, addLike, removeLike } = useContext(LikesContext);

    useEffect(() => {
        fetch('/photos.json')
            .then(response => response.json())
            .then(data => setPhotos(data.photos));
    }, []);

    return (
        <div className="gallery grid-columns-5 p-3">
            {photos.map(photo => (
                <PhotoComponent
                    key={photo.id}
                    photo={photo}
                    isLiked={likes.includes(photo.id)}
                    onLike={() => addLike(photo.id)}
                    onUnlike={() => removeLike(photo.id)}
                />
            ))}
        </div>
    );
};

export default Gallery;
