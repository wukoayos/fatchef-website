import React from "react";
import "./BallaratPromotion.css";

export default function BallaratPromotion() {
  return (
    <div className="promo-root">
      <div className="paper-bg" />

      <div className="promo-container">
        {/* 顶部分割带 */}
        <div className="divider">
          <span className="divider__line" />
          <span className="divider__label">BALLARAT SPECIAL MENU</span>
          <span className="divider__line" />
        </div>

        <p className="promo-subtitle">
          Purchase any drinks to receive the specials
        </p>

        {/* 主体：双栏（移动端单栏） */}
        <div className="promo-grid">
          {/* Monday Parma */}
          <section className="promo-box">
            <h2 className="promo-title">MONDAY PARMA NIGHT</h2>
            <ul className="promo-list">
              <li>Apprentice Chef Parma (300g) — $18</li>
              <li>Sous Chef Parma (500g) — $23</li>
              <li>Fat Chef Parma (1kg plus) — $35</li>
              <li>Executive Chef Parma (2kg plus) — $55</li>
            </ul>

            <div className="promo-subsection">
              <p><b>Mexican Parma:</b> Chorizo, jalapeño, sun-dried tomato and onion — $27</p>
              <p><b>Hawaiian Parma:</b> Napoli sauce, shaved ham, pineapple and cheese — $27</p>
              <p><b>Greek Parma:</b> Spinach, feta, kalamata olives, cherry tomato, Spanish onion and parsley — $27</p>
            </div>

            <div className="promo-highlight">
              <h4>PARMA CHALLENGE</h4>
              <p>Finish 1 kg parma under 15 mins<br />The parma will be free!</p>
            </div>
          </section>

          {/* Buffet Night */}
          <section className="promo-box">
            <h2 className="promo-title">TUESDAY & THURSDAY BUFFET PLATTER NIGHT</h2>
            <p><b>$38 for Adult</b> | <b>$18 for Kids under 12</b></p>
            <p>
              Buffet includes: Chicken, lamb souvlaki, lemon pepper calamari, crispy chicken tender,
              panko-crumbed fish, parma, Spanish chorizo, pita bread, chips, salad and dips.
            </p>
            <p className="promo-note">
              The buffet is available for a duration of two hours. Please let the waiter know to refill
              the platter when you have approximately 20% of food remaining. Takeaway is not permitted.
              <br />Thank you for your understanding.
            </p>
          </section>

          {/* Wednesday Steak Night（Ballarat版价格） */}
          <section className="promo-box">
            <h2 className="promo-title">WEDNESDAY STEAK NIGHT</h2>
            <ul className="promo-list">
              <li>Porterhouse Steak 250g — $22</li>
              <li>Porterhouse Steak 400g — $32</li>
              <li>Rib Eye Steak 500g — $38</li>
              <li>Tomahawk Steak — $89</li>
            </ul>
            <p className="promo-note">Choices of mushroom sauce, gravy or red wine jus.</p>
          </section>

          {/* Wagyu Sizzling Slab（Ballarat版） */}
          <section className="promo-box promo-wide">
            <h2 className="promo-title">WAGYU SIZZLING SLAB</h2>
            <p>
              Regular price: <s>$79</s><br />
              <b>Special offer: $55 from Sunday to Thursday</b>
            </p>
            <p>
              Wagyu steak 300g<br />
              Scallops<br />
              Tiger prawns<br />
              Beer battered chips<br />
              Garden salad<br />
              Mushroom sauce / gravy
            </p>
          </section>

          {/* Friday Cocktails */}
          <section className="promo-box promo-wide">
            <h2 className="promo-title">FRIDAY COCKTAIL NIGHT</h2>
            <p><b>$34 Jug Cocktails</b> | <b>$12 Single Cocktails</b></p>
            <p>
              Cocktail options: Sex on the Beach • Fruit Tingles • Pink Gin Spritz •
              Long Island • Sourpuss • Passionella
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}