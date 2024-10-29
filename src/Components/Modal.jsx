import React from 'react';

const Modal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-10 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-lg font-semibold mb-4">User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>

        <h3 className="text-md font-semibold mt-4">Address</h3>
        <p><strong>Street:</strong> {user.address.street}</p>
        <p><strong>Suite:</strong> {user.address.suite}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
        <p><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>

        <h3 className="text-md font-semibold mt-4">Company</h3>
        <p><strong>Name:</strong> {user.company.name}</p>
        <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
        <p><strong>Business:</strong> {user.company.bs}</p>

        <button 
          onClick={onClose} 
          className="mt-4 bg-blue-600 text-white rounded-md px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
