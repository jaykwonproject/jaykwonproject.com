import './App.css';
import React, { useState } from 'react';
import Home from './home';
import Resume from './resume';
import Study from './study';
import Misc from './misc';
import Admin from './admin';
import Post from './post';
import Login from './pages/login';
import BlogPost from './BlogPost';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  return (
    <CookiesProvider>
      <Router>
        <div className={`app-container ${isNavbarCollapsed ? 'navbar-collapsed' : ''}`}>
          <NavBar isCollapsed={isNavbarCollapsed} setIsCollapsed={setIsNavbarCollapsed} />
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<Home isNavbarCollapsed={isNavbarCollapsed} setIsNavbarCollapsed={setIsNavbarCollapsed} />} />
              <Route path="/resume" element={<Resume isNavbarCollapsed={isNavbarCollapsed} setIsNavbarCollapsed={setIsNavbarCollapsed}/>} />
              <Route path="/study" element={<Study isNavbarCollapsed={isNavbarCollapsed} setIsNavbarCollapsed={setIsNavbarCollapsed}/>} />
              <Route path="/misc" element={<Misc />} />
              <Route path="/post/:id" element={<BlogPost isNavbarCollapsed={isNavbarCollapsed} setIsNavbarCollapsed={setIsNavbarCollapsed}/>} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/post" element={<ProtectedRoute element={<Post />} />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/login" element={<Login isNavbarCollapsed={isNavbarCollapsed} setIsNavbarCollapsed={setIsNavbarCollapsed}/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
