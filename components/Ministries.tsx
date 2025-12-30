
import React from 'react';
import { MINISTRIES } from '../constants';

const Ministries: React.FC = () => {
  return (
    <section id="ministries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-[#B19470] font-semibold uppercase tracking-widest text-sm mb-4 block">Church Life</span>
            <h2 className="text-4xl md:text-5xl font-bold">Ministries & Offerings</h2>
          </div>
          <p className="text-[#6A6A6A] text-lg mt-4 md:mt-0 md:max-w-xs">
            There is a place for everyone in our family. Discover how you can grow and serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MINISTRIES.map((ministry) => (
            <div key={ministry.title} className="group relative overflow-hidden rounded-3xl aspect-[16/10]">
              <img 
                src={ministry.image} 
                alt={ministry.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">{ministry.title}</h3>
                <p className="text-white/80 max-w-sm">{ministry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
