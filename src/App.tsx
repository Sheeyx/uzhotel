import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/main/Contact";
import Home from "./pages/main";
import Rooms from "./pages/rooms/Rooms";
import AboutPage from "./pages/about/AboutPage";
import Breakfast from "./pages/services/Breakfast";
import Pool from "./pages/services/Pool";
import Sauna from "./pages/services/Sauna";
import Parking from "./pages/services/Parking";
import Birds from "./pages/services/Birds";
import Wifi from "./pages/services/Wifi";
import GalleryPage from "./pages/gallery/GalleryPage";
import RoomDetail from "./pages/rooms/components/RoomDetail";
import { LanguageProvider } from "./i18n/LanguageContext";


function App() {
  return (
      <LanguageProvider>
         <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Top navigation */}
        <Header />

        {/* Page content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
             <Route path="/services/breakfast" element={<Breakfast />} />
              <Route path="/services/pool" element={<Pool />} />
              <Route path="/services/sauna" element={<Sauna />} />
              <Route path="/services/parking" element={<Parking />} />
              <Route path="/services/birds" element={<Birds />} />
              <Route path="/services/wifi" element={<Wifi />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
      </LanguageProvider>
  );
}

export default App;
