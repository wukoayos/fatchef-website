import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const KeilorEastMenu: React.FC = () => {
  useDocumentTitle('Keilor East Menu - FAT CHEF');

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
        
        {/* Page 1: Breakfast */}
        <img
          src="/assets/menu_keilor_east_breakfast.png"
          alt="FAT CHEF Keilor East Menu - Breakfast"
          className="menu-image"
          loading="eager"
          style={imageStyle}
        />

        {/* Page 2: Dinner */}
        <img
          src="/assets/menu_keilor_east_dinner.png"
          alt="FAT CHEF Keilor East Menu - Dinner"
          className="menu-image"
          loading="lazy"
          style={{ ...imageStyle, marginTop: '3rem' }} // Add margin top for spacing
        />
        
        {/* Page 3: Drinks */}
        <img
          src="/assets/menu_keilor_east_drinks.png"
          alt="FAT CHEF Keilor East Menu - Drinks"
          className="menu-image"
          loading="lazy"
          style={{ ...imageStyle, marginTop: '3rem' }}
        />

      </div>
    </div>
  );
};

export default KeilorEastMenu;