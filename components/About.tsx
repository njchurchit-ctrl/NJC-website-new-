
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://picsum.photos/seed/njc_history/800/1000" 
                alt="Church Legacy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#B19470] p-8 rounded-2xl hidden lg:block">
              <p className="text-white font-bold text-4xl serif">50+</p>
              <p className="text-white/80 text-sm font-medium uppercase tracking-widest">Years of Grace</p>
            </div>
          </div>

          <div>
            <span className="text-[#B19470] font-semibold uppercase tracking-widest text-sm mb-4 block">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Rooted in Faith, Growing in Spirit</h2>
            <div className="space-y-6 text-[#6A6A6A] text-lg leading-relaxed">
              <p>
                Founded on <span className="font-semibold text-[#2C2C2C]">August 8, 1968</span>, by the visionary <span className="font-semibold text-[#2C2C2C]">Apostle N. Lazar</span>, New Jerusalem Church has been a sanctuary of peace in the bustling landscape of Mumbai.
              </p>
              <p>
                What started as a small gathering of believers in Bhandup has flourished into a vibrant independent evangelical community. Our history is a testament to the enduring power of prayer and the faithfulness of God's Word.
              </p>
              <p>
                Today, under the spiritual guidance of <span className="font-semibold text-[#2C2C2C]">Pastor Philip Lazar</span>, we continue to fulfill our mission of making disciples and building a strong, godly community where everyone feels welcomed and inspired.
              </p>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="h-[1px] flex-grow bg-gray-200"></div>
              <p className="serif italic text-[#B19470]">"Upon this rock I will build my church..." — Matt 16:18</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
