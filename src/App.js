import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaCalendar, FaDoorOpen, FaUsers } from "react-icons/fa";
import './App.css';
import BookablesList from './components/Bookables/BookablesList';

function App() {
  return (
    <div className="App">
        <BookablesList />
    </div>
  );
}

export default App;
