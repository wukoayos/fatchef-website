import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiCalendar, FiBookOpen, FiMapPin } from 'react-icons/fi';
import { logEvent } from '../analytics';
import './StickyMobileBar.css';

/* Default actions all point to the main store (Keilor East).
   On mobile, this gives one-tap access to the most common conversions. */
const MAIN = {
  phone: '0393376385',
  bookingUrl:
    'https://inline.app/booking/-Mpd7JG15ak_5in4-yoo:inline-live-2/-Mpd7JtCkSmw4lWeTeOD?language=en',
  menuPath: '/menu/keilor-east',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=FAT+CHEF+Keilor+East',
};

function StickyMobileBar() {
  return (
    <nav className="sticky-mobile-bar" aria-label="Quick actions">
      <a
        href={`tel:${MAIN.phone}`}
        className="smb-action"
        onClick={() => logEvent('Contact', 'Sticky Bar', 'Call')}
      >
        {(FiPhone as any)({ className: 'smb-icon' })}
        <span>Call</span>
      </a>
      <a
        href={MAIN.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="smb-action smb-action-primary"
        onClick={() => logEvent('Booking', 'Sticky Bar', 'Book')}
      >
        {(FiCalendar as any)({ className: 'smb-icon' })}
        <span>Book</span>
      </a>
      <Link
        to={MAIN.menuPath}
        className="smb-action"
        onClick={() => logEvent('Navigation', 'Sticky Bar', 'Menu')}
      >
        {(FiBookOpen as any)({ className: 'smb-icon' })}
        <span>Menu</span>
      </Link>
      <a
        href={MAIN.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="smb-action"
        onClick={() => logEvent('Navigation', 'Sticky Bar', 'Directions')}
      >
        {(FiMapPin as any)({ className: 'smb-icon' })}
        <span>Find</span>
      </a>
    </nav>
  );
}

export default StickyMobileBar;
