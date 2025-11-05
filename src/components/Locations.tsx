import React from 'react';
import './Locations.css';
import { FiPhone } from 'react-icons/fi';
import SocialLinks from './SocialLinks';

// Define a type for the props for better type-checking and readability
interface LocationBlockProps {
  name: string;
  address: string;
  phone: string;
  tradingHours: string;
  googleMapsLink: string;
  id?: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

const LocationBlock = ({ name, address, phone, tradingHours, googleMapsLink, id, socialLinks }: LocationBlockProps) => (
  <div className="location-block" id={id}>
    {/* Map Placeholder Column (now a direct grid item) */}
    <div className="map-placeholder">
      <iframe
        title={`Google Map of ${name}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDR_upH7w71m8hyUhi5xAsZ39YLqyAHl7g&q=${encodeURIComponent(name)}`}
      ></iframe>
    </div>

    {/* Location Details Column (now a direct grid item) */}
    <div className="location-details">
    <div className="location-name-bar">
      <h3 className="location-name">{name}</h3>
    </div>
    <SocialLinks {...socialLinks} />
      <div className="trading-hours">
        <p className="trading-hours-text">{tradingHours}</p>
      </div>
      <p className="location-address">{address}</p>
      <p className="location-phone">{(FiPhone as any)()} {phone}</p>

      <a 
        href={googleMapsLink} 
        className="btn btn-dark get-directions-btn" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Get Directions
      </a>
    </div>
  </div>
);

function Locations() {
  const locationsData: LocationBlockProps[] = [
    {
      name: "FAT CHEF Keilor East",
      address: "Unit 16/235 Milleara Rd, Keilor East VIC 3033",
      phone: "(03) 9337 6385",
      tradingHours: "Monday - Saturday: 8:00AM - 9:00PM\nSunday: 8:30AM - 9:00PM",
      googleMapsLink: "https://www.google.com/maps/search/?api=1&query=FAT+CHEF+Keilor+East",
      socialLinks: {
        facebook: "https://www.facebook.com/share/1AKX6P4Ub7/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/fat_chef_keilor_east?igsh=MXY4ZWk1c2hsZ3RmMQ%3D%3D&utm_source=qr",
        tiktok: "https://www.tiktok.com/@fatchefkeiloreast?_r=1&_t=ZS-9170qT65u6c"
      }
    },
    {
      name: "Fat Chef Ballarat",
      address: "1845 Sturt St, Alfredton VIC 3350\nLocated in: Bell Tower Inn",
      phone: "(03) 5338 3188",
      tradingHours: "Monday - Sunday: 5:00PM - 9:00PM",
      googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Fat+Chef+Ballarat",
      socialLinks: {
        facebook: "https://www.facebook.com/share/1ApphebqfK/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/fat_chef_ballarat?igsh=MTZrMXd4b282aHd4ag%3D%3D&utm_source=qr",
        tiktok: "https://www.tiktok.com/@fatchefballarat?_r=1&_t=ZS-9170o89M1At"
      }
    },
  ];

  return (
    <section id="locations" className="pb-5" style={{ backgroundColor: '#faf7f2' }}>
        {locationsData.map((loc, index) => (
          <LocationBlock 
            key={loc.name} 
            {...loc} 
            id={index === 0 ? "keilor-east-location" : "ballarat-location"}
          />
        ))}
    </section>
  );
}

export default Locations;