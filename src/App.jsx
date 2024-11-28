import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import About from './pages/About';
import Blog from './pages/Blog';
import Vendore from './pages/Vendore';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/vendore" element={<Vendore />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;