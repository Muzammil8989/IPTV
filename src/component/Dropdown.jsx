import React, { useState } from 'react';
import { FaAngleDown, FaSearch } from 'react-icons/fa';

const Dropdown = ({ title, options = [], onSelect, showFlag = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    onSelect(option.code); // Use `option.code` to set the selected country
    setIsOpen(false);
    setSearchTerm('');
  };

  const filteredOptions = options.filter(
    (option) => option && option.name &&  option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        className="bg-white/65 text-center text-gray-800 py-2 px-4 h-10 items-center text-lg font-semibold rounded-md hover:bg-white/90 flex justify-between w-full"
        onClick={toggleDropdown}
      >
        {title}
        <FaAngleDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute p-2 right-0 z-10 mt-2 w-52 bg-white rounded-md shadow-lg">
          <FaSearch className="absolute top-5 right-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg bg-slate-100 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="p-2 h-52 overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 hover:bg-gray-200 hover:rounded-lg cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {showFlag && option.flag && <span className="mr-2">{option.flag}</span>}
                  {option.name}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
