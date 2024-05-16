import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Card } from './Card'
import { Modal } from '../Modal'
import './ResultTable.css'

function ResultTable() {
    const { searchedProducts, isLoading, isOpen } = useContext(SearchContext);

    const renderRatingStars = (rating) => {
        const stars = [];
        const roundedRating = Math.round(rating); // Round the rating to the nearest integer

        for (let i = 0; i < 5; i++) {
            if (i < roundedRating) {
                stars.push(<span key={i} className="star filled"></span>);
            } else {
                stars.push(<span key={i} className="star"></span>);
            }
        }

        return stars;
    };

    return (
        <div className='ResultContainer'>
            <h2>Results:</h2>
            <div className='CardResultsContainer'>
                {isLoading ? (
                    <span className="loader"></span>
                ) : (
                    searchedProducts.map((product, index) => (
                        <Card
                            key={index}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        >
                            <div className="rating-stars">
                                {renderRatingStars(product.rating)} {/* Render rating stars */}
                            </div>
                        </Card>
                    ))
                )}
            </div>
            {isOpen && <Modal />}
        </div>
    );
}

export { ResultTable };