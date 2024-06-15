import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // フッターコンポーネントをインポート
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Business from './pages/Business';
import Projects from './pages/Projects';
import News from './pages/News';
import ContactUs from './pages/ContactUs';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer /> {/* フッターを追加 */}
    </div>
  </Router>
);

export default App;
