import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importing App.css

const Navbar = () => {
  return (
    <nav>
      <h1>Task Management App</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;