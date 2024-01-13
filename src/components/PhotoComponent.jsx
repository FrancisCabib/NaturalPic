
import React from 'react';
import IconHeart from './IconHeart';
import './PhotoComponent.css'; 

const PhotoComponent = ({ photo, isLiked, onLike, onUnlike }) => {

    const imageUrl = photo.src.original || photo.src.large || photo.src.medium;

    return (
        <div className="photo-container">
            <img src={imageUrl} alt={photo.photographer} className="photo-img" />
            <div className="photo-overlay">
                <div className="photo-title">{photo.photographer}</div>
                <button onClick={isLiked ? onUnlike : onLike} className="like-button">
                    <IconHeart filled={isLiked} />
                </button>
            </div>
        </div>
    );
};

export default PhotoComponent;
