import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import HeroSection from './components/HeroSection';
import BookATable from './components/BookATable';
// import MenuSection from './components/MenuSection';
import PhotoGallery from './components/PhotoGallery';
import Locations from './components/Locations';
import Footer from './components/Footer';
import KeilorEastMenu from './components/KeilorEastMenu'; // Import the new component
import BallaratMenu from './components/BallaratMenu'; // Import the new component
import KeilorEastPromotion from './components/KeilorEastPromotion'; // Import the new component
import BallaratPromotion from './components/BallaratPromotion'; // Import the new component
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import routing components
import { HashLink } from 'react-router-hash-link'; // Import HashLink

function App() {
  return (
    <Router> {/* Wrap the entire application with Router */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/"> {/* Use Link for home */}
              <img src={logo} alt="Restaurant Logo" style={{ height: '120px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Book Now
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="https://inline.app/booking/-Mpd7JG15ak_5in4-yoo:inline-live-2/-Mpd7JtCkSmw4lWeTeOD?language=en" target="_blank" rel="noopener noreferrer">FAT CHEF Keilor East</a></li>
                    <li><a className="dropdown-item" href="https://www.quandoo.com.au/place/fat-chef-ballarat-105879/menu?utm_source=google&utm_medium=cpc&utm_campaign=EN_AU_SEM_MER_10006117_ADWORDS_10105879&gad_source=1&gad_campaignid=22341740819&gbraid=0AAAAADl-pOdTtdA-MsrGS82D_KbhowHlQ&gclid=Cj0KCQjw35bIBhDqARIsAGjd-cbNZvhIuN9_2cQvvjGQsgZr-WWMVItPxUEUEsLU6FNEoqCPquNPJbTo0Anx0EALw_wcB" target="_blank" rel="noopener noreferrer">FAT CHEF Ballarat</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarLocationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Location
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarLocationDropdown">
                    <li><HashLink className="dropdown-item" to="/#keilor-east-location">FAT CHEF Keilor East</HashLink></li>
                    <li><HashLink className="dropdown-item" to="/#ballarat-location">FAT CHEF Ballarat</HashLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarMenuDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarMenuDropdown">
                    <li><Link className="dropdown-item" to="/menu/keilor-east">FAT CHEF Keilor East</Link></li> {/* Use Link for routing */}
                    <li><Link className="dropdown-item" to="/menu/ballarat">FAT CHEF Ballarat</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarPromotionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Promotion
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarPromotionDropdown">
                    <li><Link className="dropdown-item" to="/promotion/keilor-east">FAT CHEF Keilor East</Link></li>
                    <li><Link className="dropdown-item" to="/promotion/ballarat">FAT CHEF Ballarat</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarOrderDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Order Online
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarOrderDropdown">
                    <li><a className="dropdown-item" href="https://www.google.com/viewer/chooseprovider?mid=/g/11fx9m7zdm&g2lbs=AO8LyOKHLWt_bmFkUElZpXha2n_R3BAtT1jIT8cIj2B_Oro_2zhzNNtm35Oqbo1hffZNsuTgJAgsdn7aTexui2ES30B-v0tAGAld8Z9ooh6m8OkSi9im248%3D&hl=zh-Hans-AU&gl=au&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=050GacPrBuGVseMPzZmgqAo&ei=050GacPrBuGVseMPzZmgqAo&fo_s=OA&opi=79508299&ebb=1&cs=0&foub=mcpp" target="_blank" rel="noopener noreferrer">FAT CHEF Keilor East</a></li>
                    <li><a className="dropdown-item" href="https://www.google.com/viewer/chooseprovider?mid=/g/11nn1xdjtk&g2lbs=AO8LyOKhFVBB-e2lqOm3GPh5lSYB1lHVNoz6IjHEO_3_c8FS31v54Y50TC5c2B0DC_Lvru1wWM4NSneP9EVbejOWh-jbQocPVD_nYGbrjdi5r_bD4Z2YtHg%3D&hl=zh-Hans-AU&gl=au&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=LeoGaZekDI2gseMP89G2yAQ&ei=LeoGaZekDI2gseMP89G2yAQ&fo_s=OA&opi=79508299&ebb=1&cs=0&foub=mcpp" target="_blank" rel="noopener noreferrer">FAT CHEF Ballarat</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <BookATable />
              <main>
                <PhotoGallery />
                {/* <MenuSection /> */}
                <Locations />
              </main>
            </>
          } />
          <Route path="/menu/keilor-east" element={<KeilorEastMenu />} />
          <Route path="/menu/ballarat" element={<BallaratMenu />} />
          <Route path="/promotion/keilor-east" element={<KeilorEastPromotion />} />
          <Route path="/promotion/ballarat" element={<BallaratPromotion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
