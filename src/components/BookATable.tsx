import React, { useState } from 'react';
import './BookATable.css';

function BookATable() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="book-a-table-container">
      <p className="tagline">Craving something special? Book your spot now!</p>
      <div 
        className="book-a-table-wrapper"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button className="book-a-table-button">Book a Table</button>
        {isDropdownOpen && (
          <div className="book-a-table-dropdown">
            <a href="https://inline.app/booking/-Mpd7JG15ak_5in4-yoo:inline-live-2/-Mpd7JtCkSmw4lWeTeOD?language=en" target="_blank" rel="noopener noreferrer" className="dropdown-item">
              FAT CHEF Keilor East
            </a>
            <a href="https://www.quandoo.com.au/place/fat-chef-ballarat-105879/menu?utm_source=google&utm_medium=cpc&utm_campaign=EN_AU_SEM_MER_10006117_ADWORDS_10105879&gad_source=1&gad_campaignid=22341740819&gbraid=0AAAAADl-pOdTtdA-MsrGS82D_KbhowHlQ&gclid=Cj0KCQjw35bIBhDqARIsAGjd-cbNZvhIuN9_2cQvvjGQsgZr-WWMVItPxUEUEsLU6FNEoqCPquNPJbTo0Anx0EALw_wcB" target="_blank" rel="noopener noreferrer" className="dropdown-item">
              FAT CHEF Ballarat
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookATable;