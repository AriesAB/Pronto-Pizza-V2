import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SplitLanding from './components/SplitLanding';
import Inglewood from './components/Inglewood';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="bg-pronto-navy h-screen flex flex-col text-pronto-cream font-sans selection:bg-pronto-orange selection:text-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {/* 
        We use overflow-y-auto here to allow the Inglewood page to scroll, 
        while SplitLanding manages its own internal layout.
      */}
      <main className="flex-1 relative overflow-y-auto overflow-x-hidden no-scrollbar">
        {currentPage === 'home' && <SplitLanding onNavigate={setCurrentPage} />}
        {currentPage === 'inglewood' && <Inglewood />}
        {/* Fallback for other pages to Home for now */}
        {(currentPage === 'downtown' || currentPage === 'about') && (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-display">COMING SOON</h1>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;