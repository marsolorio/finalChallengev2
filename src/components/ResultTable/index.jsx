import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { Card } from "./Card";
import { Modal } from "../Modal";
import "./ResultTable.css";

function ResultTable() {
  const { searchedProducts, isLoading, isOpen } = useContext(SearchContext);
  const [productsWithRatings, setProductsWithRatings] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductsWithRatings(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="ResultContainer">
      <h2>Results:</h2>
      <div className="CardResultsContainer">
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          searchedProducts.map((product, index) => {
            const productWithRating = productsWithRatings.find(
              (p) => p.id === product.id
            );
            return (
              <Card
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                rating={
                  productWithRating
                    ? Math.round(productWithRating.rating.rate)
                    : 0
                }
              />
            );
          })
        )}
      </div>
      {isOpen && <Modal />}
    </div>
  );
}

export { ResultTable };
