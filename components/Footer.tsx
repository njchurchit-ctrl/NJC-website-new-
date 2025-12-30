
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-xl font-bold serif text-[#2C2C2C]">New Jerusalem Church</p>
          <p className="text-sm text-[#8A8A8A] mt-1">Bhandup West, Mumbai</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-[#8A8A8A]">
            &copy; {new Date().getFullYear()} New Jerusalem Church. All rights reserved.
          </p>
          <p className="text-[10px] text-[#B19470] uppercase tracking-widest mt-2 font-medium">
            Building God's Kingdom Since 1968
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
