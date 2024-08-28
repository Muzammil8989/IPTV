import React from 'react';
import { motion } from 'framer-motion';

const ChannelCard = React.memo(({ channel }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={channel.logo || channel.icon}
        alt={`${channel.name} logo`}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{channel.name}</h2>
        {channel.network && (
          <p className="text-gray-600 text-sm mb-1">Network: {channel.network}</p>
        )}
        <p className="text-gray-600 text-sm mb-1">Country: {channel.country}</p>
        
        {/* Displaying categories correctly */}
        {channel.categories && channel.categories.length > 0 && (
          <p className="text-gray-600 text-sm mb-1">
            Categories: {channel.categories.join(', ')}
          </p>
        )}
        
        <div className="flex flex-col mt-2">
          {channel.website && (
            <a
              href={channel.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 mb-1 transition-colors"
            >
              Visit Website
            </a>
          )}
          {channel.url && (
            <a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 transition-colors"
            >
              Watch Now
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

export default ChannelCard;
