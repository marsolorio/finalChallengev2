import React, { useContext } from 'react';
import { SearchContext } from '/Users/martinsolorio/Desktop/easydonate/finalProjectv2 /ED-Challengev2/src/contexts/SearchContext/index.jsx'; 

import './TypeFilter.css';

function TypeFilter({ name, options }) {
  const { selectedCategory, handleCategoryChange } = useContext(SearchContext);

  const handleChange = (event) => {
    const selectedCategory = event.target.id; // Use the checkbox ID as the category
    handleCategoryChange(selectedCategory); // Call the context function to update selectedCategory
  };

  return (
    <div className='TypeFilterContainer'>
      <h2>{name}:</h2>
      {options.map((option, id) => (
        <div key={id} className='CheckBox'>
          <input
            type="checkbox"
            id={option.id}
            name={option.label}
            checked={selectedCategory === option.id} // Check if the category is selected
            onChange={handleChange} // Handle checkbox change
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export { TypeFilter };