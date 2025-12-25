import React, { useState, useRef, useEffect } from 'react';
import './HeroSection.css';
import './BookATable.css'; // Import styles for the button
import heroVideo from '../assets/hero.mp4';

import heroPoster from '../assets/hero-poster.jpg';

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <header className="hero-section">
      <video ref={videoRef} className="hero-video" autoPlay loop muted poster={heroPoster}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1 className="hero-title">FAT CHEF</h1>
          
          {/* Book a Table button moved here */}
          <div 
            className="book-a-table-wrapper"
            style={{ marginTop: '1rem' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="book-a-table-button">Book a Table</button>
            {isDropdownOpen && (
              <div className="book-a-table-dropdown">
                <a href="https://inline.app/booking/-Mpd7JG15ak_5in4-yoo:inline-live-2/-Mpd7JtCkSmw4lWeTeOD?language=en" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                  FAT CHEF Keilor East
                </a>
                <a href="https://www.quandoo.com.au/checkout-widget/widget?aid=2&merchantId=105879" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                  FAT CHEF Ballarat
                </a>
                <a href="https://inline.app/booking/-N4yy_yLsYeh5u1PXOnt:inline-live-2" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                  FAT CHEF Carrum Downs
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}

export default HeroSection;
