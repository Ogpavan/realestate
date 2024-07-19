import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero1 from './pages/Home/Hero1';
import Properties from './pages/Properties';
import Team from './pages/Team';
import Contact from './pages/Contact';
import News from './pages/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Allcomponents from './pages/Home/Allcomponents';
import Chatbottom from './components/Chatbottom';
import DeskChatBottom from './components/DeskChatBottom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Allcomponents/>} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </main>
      <Chatbottom />
      <DeskChatBottom />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
