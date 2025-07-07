import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setIsVisible(false), 300); // tunggu animasi selesai
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Jangan render sama sekali kalau tidak visible
  if (!isOpen && !isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999]">
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className={`relative bg-[#161716] rounded-lg shadow-lg max-w-lg w-full p-6 transition-all duration-300 transform ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
