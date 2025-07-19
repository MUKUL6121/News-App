// Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar-content">
      <h3>Categories</h3>
      <ul>
        <li><a href="/">World</a></li>
        <li><a href="/">Politics</a></li>
        <li><a href="/">Technology</a></li>
        <li><a href="/">Health</a></li>
        <li><a href="/">Science</a></li>
        <li><a href="/">Sports</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
