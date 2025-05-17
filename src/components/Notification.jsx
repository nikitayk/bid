import React, { useEffect } from 'react';

const Notification = ({ type = 'info', message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className={`fixed top-6 right-6 z-50 px-4 py-2 rounded text-white shadow-lg ${getColor()} animate-fade-in`}>
      {message}
    </div>
  );
};

export default Notification;
