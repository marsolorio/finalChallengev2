import { useState, useContext } from 'react'; // Updated import
import { Rating } from './Rating';
import './RatingFilter.css';
import { SearchContext } from '/Users/martinsolorio/Desktop/easydonate/finalProjectv2 /ED-Challengev2/src/contexts/SearchContext/index.jsx'; // Updated import path

function RatingFilter() {
    // Accessing the SearchContext
    const { selectedRating, handleRatingChange } = useContext(SearchContext);

    // Event handler for when a rating is clicked
    const handleRatingClick = (stars) => {
        handleRatingChange(stars); // Call the context function to handle rating change
    };

    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                <Rating stars={4} onClick={() => handleRatingClick(4)} isActive={selectedRating === 4} />
                <Rating stars={3} onClick={() => handleRatingClick(3)} isActive={selectedRating === 3} />
                <Rating stars={2} onClick={() => handleRatingClick(2)} isActive={selectedRating === 2} />
                <Rating stars={1} onClick={() => handleRatingClick(1)} isActive={selectedRating === 1} />
            </div>
        </div>
    );
}

export { RatingFilter };
