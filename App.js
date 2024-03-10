import React from 'react';
import './App.css';
import { AuthProvider } from './components/auth';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const getCSSImports = (location) => {
    if (location.pathname === '/') {
      import('./css/styles.css');
    } else if (location.pathname === '/Gallery') {
      import('./css/shop_styles.css');
    } else if (location.pathname === '/Login') {
      import('./css/login.css');
    } else if (location.pathname === '/Register') {
      import('./css/register.css');
    } else if (location.pathname === '/ForgotPassword') {
      import('./css/Forgot.css');
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home getCSSImports={getCSSImports} />} />
          <Route path="/Gallery" element={<Gallery getCSSImports={getCSSImports} />} />
          <Route path="/Login" element={<Login getCSSImports={getCSSImports} />} />
          <Route path="/Register" element={<Register getCSSImports={getCSSImports} />} />
          <Route path="/About" element={<About getCSSImports={getCSSImports} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;