import React from "react";
import "./KeilorEastPromotion.css";

export default function KeilorEastPromotion() {
  return (
    <div className="promo-root">
      <div className="paper-bg" />

      <div className="promo-container">
        <div className="divider">
          <span className="divider__line" />
          <span className="divider__label">KEILOR EAST SPECIAL MENU</span>
          <span className="divider__line" />
        </div>

        <p className="promo-subtitle">
          Purchase any drinks to receive the specials
        </p>

        <div className="promo-grid">
          {/* --- Monday Parma --- */}
          <div className="promo-box">
            <h2 className="promo-title">MONDAY PARMA NIGHT</h2>
            <ul className="promo-list">
              <li>Apprentice Chef Parma (300g) – $18</li>
              <li>Sous Chef Parma (500g) – $23</li>
              <li>Fat Chef Parma (1kg plus) – $35</li>
              <li>Executive Chef Parma (2kg plus) – $55</li>
            </ul>

            <div className="promo-subsection">
              <p><b>Mexican Parma:</b> Chorizo, jalapeño, sun-dried tomato & onion — $27</p>
              <p><b>Hawaiian Parma:</b> Napoli sauce, shaved ham, pineapple & cheese — $27</p>
              <p><b>Greek Parma:</b> Spinach, feta, kalamata olives, cherry tomato, Spanish onion & parsley — $27</p>
            </div>

            <div className="promo-highlight">
              <h4>PARMA CHALLENGE</h4>
              <p>Finish 1kg parma under 15 mins<br />The parma will be free!</p>
            </div>
          </div>

          {/* --- Tuesday Buffet --- */}
          <div className="promo-box">
            <h2 className="promo-title">TUESDAY & THURSDAY BUFFET PLATTER NIGHT</h2>
            <p><b>$38 for Adults</b> | <b>$18 for Kids under 12</b></p>
            <p>
              Buffet includes: Chicken, lamb souvlaki, lemon pepper calamari, crispy chicken tender,
              panko crumbed fish, parma, Spanish chorizo, pita bread, chips, salad and dips.
            </p>
            <p className="promo-note">
              The buffet is available for a duration of two hours. Please let the waiter know to refill
              the platter when approximately 20% of food remains. Takeaway is not permitted.
            </p>
          </div>

          {/* --- Wednesday Steak --- */}
          <div className="promo-box">
            <h2 className="promo-title">WEDNESDAY STEAK NIGHT</h2>
            <ul className="promo-list">
              <li>Porterhouse Steak 250g — $20</li>
              <li>Porterhouse Steak 400g — $30</li>
              <li>Rib Eye Steak 500g — $38</li>
              <li>Scotch Fillet Steak — $30</li>
              <li>Tomahawk Steak — $85</li>
            </ul>
            <p className="promo-note">
              Choices of mushroom sauce, gravy or red wine jus.
            </p>
          </div>

          {/* --- Friday Cocktails --- */}
          <div className="promo-box">
            <h2 className="promo-title">FRIDAY COCKTAIL NIGHT</h2>
            <p><b>$34 Jug Cocktails</b> | <b>$12 Single Cocktails</b></p>
            <p>
              Sex on the Beach • Fruit Tingles • Pink Gin Spritz • Long Island • Sourpuss • Passionella
            </p>
          </div>

          {/* --- Drunken Butcher --- */}
          <div className="promo-box promo-wide">
            <h2 className="promo-title">DRUNKEN BUTCHER PLATTER</h2>
            <p>
              Regular price: <s>$279</s><br />
              <b>Special offer: $199 (Sunday to Thursday)</b>
            </p>
            <p>
              The platter comes with:<br />
              1.2kg Tomahawk<br />
              2 Porterhouse Steaks<br />
              ½kg Prawns<br />
              ½kg Calamari<br />
              12 Oysters (Fresh or Kilpatrick)<br />
              Large beer-battered chips<br />
              Large green salad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}