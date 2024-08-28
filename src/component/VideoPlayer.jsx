// VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-2xl">
        <video id="video" className="w-[700px] h-[400px]" controls>
          <source
            src="path/to/your/live-stream.m3u8"
            type="application/x-mpegURL"
          />
          Your browser does not support the video tag.
        </video>
        <div className="flex items-center justify-between p-6">
          <button
            id="play-pause"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            <i className="fas fa-play" id="play-icon"></i>
            <i className="fas fa-pause hidden" id="pause-icon"></i>
          </button>
          <input
            type="range"
            id="progress"
            className="flex-grow mx-4"
            value="0"
            min="0"
            step="1"
          />
          <button
            id="fullscreen"
            className="bg-gray-600 text-white py-2 px-6 rounded hover:bg-gray-500"
          >
            <i className="fas fa-expand"></i>
          </button>
        </div>
        <div className="p-4 flex items-center gap-3">
          <button id="volume-button" className="text-white">
            <i className="fas fa-volume-up" id="volume-icon"></i>
          </button>
          <input
            type="range"
            id="volume"
            min="0"
            max="1"
            step="0.1"
            value="1"
            className="w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
