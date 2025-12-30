
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="visit" className="py-24 bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#B19470] font-semibold uppercase tracking-widest text-sm mb-4 block">Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 serif">Visit Us in Mumbai</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#B19470]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    New Jerusalem Church Lane, <br />
                    Tilak Nagar, Dargah Cross Road, <br />
                    Bhandup West, Mumbai 400078.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#B19470]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Inquiries</h4>
                  <p className="text-gray-400">
                    Contact Pastor Philip Lazar for service timings and prayer requests.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-6">
              <a 
                href="https://facebook.com/newjerusalemchurchhq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#B19470] transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://youtube.com/@njcmumbaihq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#B19470] transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Service Schedule</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Sunday Morning Worship</span>
                <span className="font-semibold">Morning</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Weekly Prayer Meeting</span>
                <span className="font-semibold">Weekdays</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Youth Fellowship</span>
                <span className="font-semibold">Saturdays</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Bible Study</span>
                <span className="font-semibold">Contact Pr. Philip</span>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#B19470]/10 rounded-2xl border border-[#B19470]/20">
              <p className="text-sm italic text-[#B19470]">
                "A positive local reputation for accessibility and serenity, providing peace and grace amid Mumbai's city hustle."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
