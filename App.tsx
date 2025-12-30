
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Beliefs from './components/Beliefs';
import Ministries from './components/Ministries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Beliefs />
        <Ministries />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
