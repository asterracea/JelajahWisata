import React from 'react';

const Detail = ({ show, onClose, destination }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">{destination.name}</h2>
        <show alt={destination.name} className="w-full h-auto mb-4 rounded" />
        <p>{destination.description}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Detail;
