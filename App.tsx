import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SplitLanding from './components/SplitLanding';
import Inglewood from './components/Inglewood';
import Downtown from './components/Downtown';
import About from './components/About';
import Contact from './components/Contact';

const AppContent: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-pronto-navy h-screen flex flex-col text-pronto-cream font-sans selection:bg-pronto-orange selection:text-white">
      <Navbar />
      
      <main className={`flex-1 relative overflow-y-auto overflow-x-hidden no-scrollbar ${
        currentPath === '/inglewood' ? 'mt-0' : ''
      }`}>
        <Routes>
          <Route path="/" element={<SplitLanding />} />
          <Route path="/inglewood" element={<Inglewood />} />
          <Route path="/downtown" element={<Downtown />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
