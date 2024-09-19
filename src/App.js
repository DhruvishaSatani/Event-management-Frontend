import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import { EventProvider } from './Context/EventContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;
