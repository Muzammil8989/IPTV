import React from 'react';

const Pagination = ({ channelsPerPage, totalChannels, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChannels / channelsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4 ">
      <ul className="flex justify-center space-x-4">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md ${
                currentPage === number
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500'
              } hover:bg-blue-400 hover:text-white`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
