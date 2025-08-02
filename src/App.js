import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Scheme from './components/Scheme';
import Assets from './components/Assets';
import Questions from './components/Questions';
import Engineer from './components/Engineer';
import Zpmember from './components/Zpmember';
import Blockincharge from './components/Blockincharge';
import Survey from './components/Survey';
import Block from './components/Block';
import AddScheme from './components/Addscheme';

const App = () => {
  const [theme, setTheme] = useState('corporate');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'corporate' ? 'dim' : 'corporate'));
  };

  return (
    <div data-theme={theme} className="min-h-screen relative">
      <Router>
        <Sidebar />

        <nav className="navbar bg-base-100 shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="text-lg font-bold text-primary">App Name</div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="btn btn-sm btn-outline btn-primary"
              >
                Switch to {theme === 'corporate' ? 'Dark' : 'Light'} Theme
              </button>
            </div>
          </div>
        </nav>


        {/* Main Content Area with top margin */}
        <div className="ml-20 lg:ml-72 pt-16 sm:pt-20 md:pt-24 lg:pt-24 p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scheme" element={<Scheme />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/users/engineer" element={<Engineer />} />
            <Route path="/users/zpmember" element={<Zpmember />} />
            <Route path="/users/block-incharge" element={<Blockincharge />} />
            <Route path="/report/survey" element={<Survey />} />
            <Route path="/report/block" element={<Block />} />
            <Route path="/add-scheme" element={<AddScheme />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
