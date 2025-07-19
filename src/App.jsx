import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Dataset from './components/dataset1'; // Ensure the filename matches the import
import Footer from './components/footer'; // Ensure the filename matches the import

function App() {
  const [query, setQuery] = useState('war');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="main">
      <header className="header">
        <Navbar onSearch={handleSearch} />
      </header>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <div className="breaking-news">Breaking News</div>
      <main className="content">
        <Routes>
          <Route path="/" element={<Dataset query={query} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
