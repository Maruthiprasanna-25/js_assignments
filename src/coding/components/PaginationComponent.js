// PaginationComponent.js
import React, { useState } from 'react';

const PaginationComponent = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul id="page-numbers">
        {pageNumbers.map(number => (
          <li key={number} id={number} onClick={handleClick}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaginationComponent;
