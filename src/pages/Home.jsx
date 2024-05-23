// В файле Home.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../layout/Footer'; // Проверьте правильность пути

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/subscription" element={<Footer />} />
        {/* Другие маршруты */}
      </Routes>
    </Router>
  );
}

export default Home;
