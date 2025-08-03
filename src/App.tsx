// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'; // Footer 컴포넌트 import
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Community from './pages/Community';
import InformationPlaza from './pages/InformationPlaza';

// --- 신규 페이지 컴포넌트 import (추가) ---
import EquipmentIntroduction from './pages/EquipmentIntroduction';
import SpaceIntroduction from './pages/SpaceIntroduction';
import Programs from './pages/Programs';
import RelatedBusiness from './pages/RelatedBusiness';
import EtcInfo from './pages/EtcInfo';

// --- 삭제될 페이지 컴포넌트 (주석 처리 또는 삭제) ---
// import SupportPrograms from './pages/SupportPrograms';
// import FacilityReservation from './pages/FacilityReservation';
// import EducationEvents from './pages/EducationEvents';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/information" element={<InformationPlaza />} />
            
            {/* --- 신규 라우트 경로 (추가) --- */}
            <Route path="/equipment" element={<EquipmentIntroduction />} />
            <Route path="/space" element={<SpaceIntroduction />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/related-business" element={<RelatedBusiness />} />
            <Route path="/etc" element={<EtcInfo />} />

            {/* --- 기존 라우트 경로 (삭제 또는 주석 처리) --- */}
            {/* <Route path="/support-programs" element={<SupportPrograms />} /> */}
            {/* <Route path="/facility-reservation" element={<FacilityReservation />} /> */}
            {/* <Route path="/education-events" element={<EducationEvents />} /> */}
          </Routes>
        </main>
        <Footer /> {/* Footer 컴포넌트 추가 */}
      </div>
    </Router>
  );
};

export default App;
