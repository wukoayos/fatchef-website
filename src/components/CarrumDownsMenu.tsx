import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

// We can reuse the styling from other menu pages if applicable, 
// or define specific styles here.
// Since it's image-based, we might just need some container styling.
import './Locations.css'; // Reusing for container styles if needed, or just inline for now.

const CarrumDownsMenu: React.FC = () => {
  useDocumentTitle('Carrum Downs Menu - FAT CHEF');

  // Shared style for menu images
  const imageStyle: React.CSSProperties = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
    borderRadius: '16px', // Rounded corners
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // Soft shadow
  };

  return (
    <div className="menu-page" style={{ padding: '3rem 1rem', backgroundColor: '#fafafa' }}>
      <div className="menu-container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        {/* Page 1 */}
        <img
          src="/assets/menu_carrum_downs_page1.jpg"
          alt="FAT CHEF Carrum Downs Menu - Page 1 - Breakfast, Lunch, Signature Dishes. Call +61 3 9782 0618 for details"
          className="menu-image"
          loading="eager"
          style={imageStyle}
        />

        {/* Page 2 */}
        <img
          src="/assets/menu_carrum_downs_page2.jpg"
          alt="FAT CHEF Carrum Downs Menu - Page 2 - Dinner, Drinks, Desserts. Call +61 3 9782 0618 for details"
          className="menu-image"
          loading="lazy"
          style={{ ...imageStyle, marginTop: '3rem' }}
        />
      </div>
    </div>
  );
};

export default CarrumDownsMenu;
