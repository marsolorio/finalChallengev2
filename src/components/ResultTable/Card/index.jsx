import React, { useContext } from 'react';
import { Detail } from './Detail';
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css';

function Card({ image, title, price, description }) {
    const { setIsOpen, setImageProduct, setTitleProduct, setPriceProduct, setDescriptionProduct } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true);
        setImageProduct(image);
        setTitleProduct(title);
        setPriceProduct(price);
        setDescriptionProduct(description);
    };

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image} alt={title} />
            </div>
            <Detail
                title={title}
                price={price}
            />
            {/* Add the rating stars based on rate value */}
            <div className="rating-stars">
                {/* Render your rating stars component here */}
                {/* Example: <RatingStars rating={rating} /> */}
            </div>
        </div>
    );
}

export { Card };
