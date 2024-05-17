import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Rating.css';

function Rating({ stars, onClick }) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
        onClick && onClick(!isActive);
    };

    const fillStars = () => {
        const starSelected = Array.from({ length: stars }, (_, index) => (
            <AiFillStar className='StarFilled' key={index} />
        ));
        const starNotSelected = Array.from({ length: 5 - stars }, (_, index) => (
            <AiOutlineStar className='StarNotFilled' key={index} />
        ));
        return [...starSelected, ...starNotSelected];
    };

    return (
        <div className={`RatingContainer ${isActive ? 'ActiveRating' : ''}`} onClick={toggleActive}>
            {fillStars()}
            <h3>& up</h3>
        </div>
    );
}

export { Rating };
