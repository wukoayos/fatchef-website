import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import './SocialLinks.css';

interface SocialLinksProps {
  facebook: string;
  instagram: string;
  tiktok: string;
}

function SocialLinks({ facebook, instagram, tiktok }: SocialLinksProps) {
  return (
    <div className="social-links-container">
      {facebook && (
        <a href={facebook} className="social-icon facebook" target="_blank" rel="noopener noreferrer">
          {(FaFacebook as any)()}
        </a>
      )}
      {instagram && (
        <a href={instagram} className="social-icon instagram" target="_blank" rel="noopener noreferrer">
          {(FaInstagram as any)()}
        </a>
      )}
      {tiktok && (
        <a href={tiktok} className="social-icon tiktok" target="_blank" rel="noopener noreferrer">
          {(FaTiktok as any)()}
        </a>
      )}
    </div>
  );
}

export default SocialLinks;