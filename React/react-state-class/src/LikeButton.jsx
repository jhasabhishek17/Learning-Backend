// Imports useState to manage the like status and click count, stores whether the heart is liked and how many times it has been clicked, toggles the like status and increases the click count when clicked, sets the heart color to red when liked, and displays a filled or empty heart based on the current like status.

import { useState } from "react";

export default function LikeButton () {
    let [isliked , setIsLiked ] = useState(false);
    let [clicks, setclicks] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isliked);
        setclicks(clicks+1);
    };

    let likeStyle = {color:"red"};
    
    return (
        <div>
            <p>Clicks={clicks}</p>
            <p onClick={toggleLike}>
                {isliked ? (
                <i className="fa-solid fa-heart" style={likeStyle}></i>
                ) : (
                <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}