import React, { useRef, useEffect } from 'react';
import './HeroSection.css';
import heroVideo from '../assets/hero.mp4';

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set the playback speed to 0.5x
    }
  }, []);

  return (
    <header className="hero-section">
      <video ref={videoRef} className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1 className="hero-title">FAT CHEF</h1>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
