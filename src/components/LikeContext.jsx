
import React, { createContext, useState } from 'react';

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
    const [likes, setLikes] = useState([]);

    const addLike = photoId => {
        if (!likes.includes(photoId)) {
            setLikes([...likes, photoId]);
        }
    };

    const removeLike = photoId => {
        setLikes(likes.filter(id => id !== photoId));
    };

    return (
        <LikesContext.Provider value={{ likes, addLike, removeLike }}>
            {children}
        </LikesContext.Provider>
    );
};
