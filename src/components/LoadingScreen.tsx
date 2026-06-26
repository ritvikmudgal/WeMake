import React from 'react';
import { motion } from 'framer-motion';
import logo from "./WM.png"; // Adjust the path to your logo image

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <div className="flex flex-col items-center">
  <div className="w-40 h-40 rounded-full overflow-hidden mb-8"> 
    <img
      src={logo}
      alt="WeMake Logo"
      className="w-full h-full object-cover"
    />
  </div>

  <h1 className="text-4xl font-bold tracking-tight">
    WeMake
  </h1>

  <p className="mt-1 text-gray-500">
    Websites That Feel Alive
  </p>
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          className="mt-8 h-0.5 bg-gray-900 rounded-full w-48 mx-auto origin-left"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;