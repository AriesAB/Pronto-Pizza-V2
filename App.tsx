import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SplitLanding from './components/SplitLanding';
import Inglewood from './components/Inglewood';
import Downtown from './components/Downtown';
import About from './components/About';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="bg-pronto-navy h-screen flex flex-col text-pronto-cream font-sans selection:bg-pronto-orange selection:text-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className={`flex-1 relative overflow-y-auto overflow-x-hidden no-scrollbar ${
        currentPage === 'inglewood' ? 'mt-0' : ''
      }`}>
        {currentPage === 'home' && <SplitLanding onNavigate={setCurrentPage} />}
        {currentPage === 'inglewood' && <Inglewood />}
        {currentPage === 'downtown' && <Downtown />}
        {currentPage === 'about' && <About />}
      </main>
    </div>
  );
};

export default App;
