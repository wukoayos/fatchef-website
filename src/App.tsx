import React, { Suspense } from 'react';
import './App.css';
import logo from './assets/logo.png';
import HeroSection from './components/HeroSection';
import BookATable from './components/BookATable';
// import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import KeilorEastMenu from './components/KeilorEastMenu'; // Import the new component
import BallaratMenu from './components/BallaratMenu'; // Import the new component
import KeilorEastPromotion from './components/KeilorEastPromotion'; // Import the new component
import BallaratPromotion from './components/BallaratPromotion'; // Import the new component
import CarrumDownsMenu from './components/CarrumDownsMenu'; // Import the new component
import CarrumDownsPromotion from './components/CarrumDownsPromotion'; // Import the new component
import useDocumentTitle from './hooks/useDocumentTitle';
import AnalyticsTracker from './components/AnalyticsTracker';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import routing components
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const PhotoGallery = React.lazy(() => import('./components/PhotoGallery'));
const Locations = React.lazy(() => import('./components/Locations'));

const HomePage = () => {
  useDocumentTitle("FAT CHEF - Never Trust A Skinny Chef");
  return (
    <>
      <HeroSection />
      <BookATable />
      <main>
        <Suspense fallback={<div>Loading Photo Gallery...</div>}>
          <PhotoGallery />
        </Suspense>
        {/* <MenuSection /> */}
        <Suspense fallback={<div>Loading Locations...</div>}>
          <Locations />
        </Suspense>
      </main>
    </>
  );
};

function App() {
  return (
    <Router> {/* Wrap the entire application with Router */}
      <AnalyticsTracker />
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/" onClick={() => window.scrollTo(0, 0)}> {/* Use Link for home */}
              <img src={logo} alt="FAT CHEF Restaurant Logo" style={{ height: '120px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Book Now
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="https://inline.app/booking/-Mpd7JG15ak_5in4-yoo:inline-live-2/-Mpd7JtCkSmw4lWeTeOD?language=en" target="_blank" rel="noopener noreferrer">FAT CHEF Keilor East</a></li>
                    <li><a className="dropdown-item" href="https://inline.app/booking/-MpdA6HeGgYZSaki4kNN:inline-live-2/-MpdA6vJ4vHs8l_eY5ZE" target="_blank" rel="noopener noreferrer">FAT CHEF Ballarat</a></li>
                    <li><a className="dropdown-item" href="https://inline.app/booking/-N4yy_yLsYeh5u1PXOnt:inline-live-2" target="_blank" rel="noopener noreferrer">FAT CHEF Carrum Downs</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#!" id="navbarLocationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Location
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarLocationDropdown">
                    <li><HashLink className="dropdown-item" to="/#keilor-east-location">FAT CHEF Keilor East</HashLink></li>
                    <li><HashLink className="dropdown-item" to="/#ballarat-location">FAT CHEF Ballarat</HashLink></li>
                    <li><HashLink className="dropdown-item" to="/#carrum-downs-location">FAT CHEF Carrum Downs</HashLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#!" id="navbarMenuDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarMenuDropdown">
                    <li><Link className="dropdown-item" to="/menu/keilor-east">FAT CHEF Keilor East</Link></li> {/* Use Link for routing */}
                    <li><Link className="dropdown-item" to="/menu/ballarat">FAT CHEF Ballarat</Link></li>
                    <li><Link className="dropdown-item" to="/menu/carrum-downs">FAT CHEF Carrum Downs</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#!" id="navbarPromotionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Promotion
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarPromotionDropdown">
                    <li><Link className="dropdown-item" to="/promotion/keilor-east">FAT CHEF Keilor East</Link></li>
                    <li><Link className="dropdown-item" to="/promotion/ballarat">FAT CHEF Ballarat</Link></li>
                    <li><Link className="dropdown-item" to="/promotion/carrum-downs">FAT CHEF Carrum Downs</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#!" id="navbarOrderDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Order Online
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarOrderDropdown">
                    <li><a className="dropdown-item" href="https://www.ubereats.com/au/store/fat-chef-keilor-east/MGw4_kTaTZS6eC5ikFF9Ew?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE1NiUyMFVuaW9uJTIwUm9hZCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmU4Y2ZkODc3LTYyOWYtNTY4Yy02ZWViLTlmNGEzNTMyZmRhMyUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBLTM3Ljc3NDk5OSUyQyUyMmxvbmdpdHVkZSUyMiUzQTE0NC45MTU4NTYlN0Q%3D&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target="_blank" rel="noopener noreferrer">FAT CHEF Keilor East</a></li>
                    <li><a className="dropdown-item" href="https://www.ubereats.com/au/store/fatchef-ballarat/L0hw1TmYTH-YswXYcJ5V8Q?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target="_blank" rel="noopener noreferrer">FAT CHEF Ballarat</a></li>
                    <li><a className="dropdown-item" href="https://www.ubereats.com/store/fat-chef-neva-trust-a-skinny-chef/n5CGTibHTr6NVFu__HYbFA?diningMode=PICKUP" target="_blank" rel="noopener noreferrer">FAT CHEF Carrum Downs</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu/keilor-east" element={<KeilorEastMenu />} />
          <Route path="/menu/ballarat" element={<BallaratMenu />} />
          <Route path="/menu/carrum-downs" element={<CarrumDownsMenu />} />
          <Route path="/promotion/keilor-east" element={<KeilorEastPromotion />} />
          <Route path="/promotion/ballarat" element={<BallaratPromotion />} />
          <Route path="/promotion/carrum-downs" element={<CarrumDownsPromotion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
