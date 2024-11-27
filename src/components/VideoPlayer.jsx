import React from 'react';

function VideoPlayer({ videoSrc, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-blue-400 text-2xl"
          aria-label="Close video"
        >
          ×
        </button>
        <video
          className="w-full rounded-lg"
          controls
          autoPlay
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;