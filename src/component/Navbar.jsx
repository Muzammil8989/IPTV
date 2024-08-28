import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import ChannelCard from './ChannelCard';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [channels, setChannels] = useState([]);
  const [streams, setStreams] = useState([]);
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [channelsPerPage] = useState(12);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get('https://iptv-org.github.io/api/channels.json');
        setChannels(response.data);
      } catch (error) {
        console.error('Error fetching channels:', error);
      }
    };

    const fetchStreams = async () => {
      try {
        const response = await axios.get('https://iptv-org.github.io/api/streams.json');
        setStreams(response.data);
      } catch (error) {
        console.error('Error fetching streams:', error);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://iptv-org.github.io/api/countries.json');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://iptv-org.github.io/api/categories.json');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchChannels();
    fetchStreams();
    fetchCountries();
    fetchCategories();
  }, []);

  // Filter channels based on search term, selected country, and selected category
// Filter channels based on search term, selected country, and selected category
// Filter channels based on search term, selected country, and selected category
const filteredData = channels.filter(channel => {
    console.log('Current channel:', channel); // Log the channel object

    // Ensure the channel has the expected properties
    if (!channel) return false; // Ignore if channel is not defined
    const itemName = channel.name ? channel.name.toLowerCase() : '';
    const itemCountry = channel.country ? channel.country.toLowerCase() : '';
    const itemCategories = Array.isArray(channel.categories) ? channel.categories.map(cat => cat?.toLowerCase()).filter(Boolean) : [];

    // Log the properties being accessed
    console.log('Channel Name:', itemName);
    console.log('Channel Country:', itemCountry);
    console.log('Channel Categories:', itemCategories);

    // Ensure selected values are defined
    const lowerSearchTerm = searchTerm ? searchTerm.toLowerCase() : '';
    const lowerSelectedCountry = selectedCountry ? selectedCountry.toLowerCase() : '';
    const lowerSelectedCategory = selectedCategory ? selectedCategory.toLowerCase() : '';

    // Return filter condition
    return (
        itemName.includes(lowerSearchTerm) &&
        (lowerSelectedCountry === '' || itemCountry === lowerSelectedCountry) &&
        (lowerSelectedCategory === '' || itemCategories.includes(lowerSelectedCategory))
    );
});

  const totalPages = Math.ceil(filteredData.length / channelsPerPage);
  const indexOfLastItem = currentPage * channelsPerPage;
  const indexOfFirstItem = indexOfLastItem - channelsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination control functions
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      <nav className="bg-slate-800 flex items-center h-20 gap-4 w-full">
        <h1 className="text-3xl font-bold text-slate-100 p-4">IPTV Channel</h1>
        <button className="bg-white text-gray-800 py-2 px-6 h-10 items-center text-lg font-semibold rounded-md hover:bg-white/90">
          Install
        </button>

        <div className="relative w-[50%]">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search channel..."
            className="w-full h-10 pl-10 bg-slate-100 rounded-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Country Dropdown */}
        <Dropdown
          title={selectedCountry ? countries.find(c => c.code === selectedCountry)?.name : 'All Countries'}
          options={countries}
          onSelect={(countryCode) => setSelectedCountry(countryCode)}
          showFlag={true}
        />

        {/* Category Dropdown */}
        <Dropdown
          title={selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'All Categories'}
          options={categories}
          onSelect={(categoryId) => setSelectedCategory(categoryId)}
        />
      </nav>
      
      <div className="mt-4 gap-10 grid grid-cols-4">
        {currentItems.length > 0 ? (
          currentItems.map(item => (
            <ChannelCard key={item.id} channel={item} />
          ))
        ) : (
          <p className="text-gray-500">No channels found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button onClick={prevPage} disabled={currentPage === 1} className="bg-blue-500 text-white py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages} className="bg-blue-500 text-white py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Navbar;
