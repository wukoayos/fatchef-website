import React from "react";
import "./BallaratMenu.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

/* ---------- Types ---------- */
interface Item {
  name: string;
  price?: string;      // 留空表示该行无独立价格（描述中自带多规格）
  desc?: string;
  flags?: string;      // (V/GF) 等
  dots?: boolean;      // 是否显示点状 leader（名称与价格之间）
}
interface Section {
  title: string;
  subtitle?: string;
  items: Item[];
  boxed?: boolean;     // 画出浅色或深色盒子
  inverse?: boolean;   // 深色反相（黑底白字）
}

/* ---------- Data: 左列：FAT CHEF SIGNATURE ---------- */
const signature: Section = {
  title: "FAT CHEF SIGNATURE",
  inverse: true,
  boxed: true,
  items: [
    {
      name: "SOUVLAKI PLATTER",
      desc:
        "Lamb, chicken souvlaki, chorizo, calamari. Served with pita bread, chips, green salad, tzatziki and tartare.\n" +
        "For 2: 79 • For 4–5: 149 • For 8–9: 279",
    },
    {
      name: "PARMALAKI PLATTER",
      desc:
        "Lamb, chicken souvlaki, calamari, and chicken parma (no ham). Served with pita bread, chips, green salad, tzatziki, and tartare.\n" +
        "For 2: 99 (500g parma) • For 4–5: 179 (1kg parma) • For 8–9: 299 (2kg parma)",
    },
    {
      name: "RIB MASTER PLATTER",
      desc:
        "Slow cooked marinated PORK ribs, fried chicken wings, chorizo. Served with coleslaw, chips, and onion rings.\n" +
        "For 2: 85 • For 4–5: 155 • For 8–9: 279",
    },
    {
      name: "BEEF LOVERS PLATTER",
      desc:
        "Slow cooked BBQ BEEF ribs, beef steak, grilled prawn skewers, grilled corn cobs. Served with chips and onion rings.\n" +
        "For 2: 99 • For 4–5: 179 • For 8–9: 299",
    },
    {
      name: "MIXED GRILL PLATTER",
      desc:
        "Grilled chicken skewers, lamb skewers, prawn skewers, slice beef brisket, corn cobs. Served with chips and onion rings.\n" +
        "For 3–4: 185 • For 7–8: 329",
    },
    {
      name: "SEAFOOD PLATTER",
      price: "149",
      desc:
        "Grilled salmon, grilled prawns, baked scallops with cheese, fried flat head fish, chilli mussels, lemon pepper calamari. Served with chips and green salad.\n" +
        "Add on lobster: $70",
      dots: true,
    },
  ],
};

/* ---------- Data: 中列：Starters/Salad/Sides/For Kids ---------- */
const starters: Section = {
  title: "STARTERS",
  items: [
    { name: "Bowl of chips with Aioli", price: "12", dots: true },
    { name: "Cheesy garlic bread", price: "13", dots: true },
    { name: "Arancini with homemade Napoli sauce", price: "14", dots: true },
    { name: "Fried chicken wings with cajun seasoning", price: "15", dots: true },
    { name: "Fried calamari with Tartare", price: "18", dots: true },
  ],
};

const salads: Section = {
  title: "SALAD",
  items: [
    {
      name: "CAESAR SALAD",
      price: "22",
      dots: true,
      desc:
        "Cos lettuce, croutons, parmesan cheese, crispy bacon, fried egg and creamy Caesar dressing. Add grilled chicken: $6",
    },
    {
      name: "PUMPKIN & QUINOA SALAD (V/GF)",
      price: "22",
      dots: true,
      desc:
        "Roasted pumpkin with herbs, quinoa, baby spinach, mixed salad, pepitas, cherry tomatoes, Spanish onion, dried fruit, honey mustard. Add grilled chicken: $6",
    },
    {
      name: "GREEK LAMB/CHICKEN SALAD",
      price: "26",
      dots: true,
      desc:
        "Grilled lamb, lettuce, olives, cherry tomatoes, Spanish onion, feta, cucumber, balsamic glaze.",
    },
  ],
};

const sides: Section = {
  title: "SIDES",
  items: [
    { name: "Green salad", price: "10", dots: true },
    { name: "Pita bread", price: "2", dots: true },
    { name: "Tzatziki/Tartare/BBQ sauce/Aioli/Mayo", price: "5", dots: true },
    { name: "Red wine jus/Mushroom sauce/Gravy/Garlic butter", price: "3", dots: true },
    { name: "Mashed potato/Steamed veggies", price: "6", dots: true },
  ],
};

const kids: Section = {
  title: "FOR KIDS",
  subtitle: "13  •  Under 10 years old",
  items: [
    { name: "Chicken nuggets and chips" },
    { name: "Ham, cheese pizza" },
    { name: "Kids fish and chips" },
    { name: "Kids Bolognese/Napoli spaghetti" },
    { name: "Cheese burger and chips" },
  ],
};

/* ---------- Data: 右列：Mains/Pasta + Desserts（黑底盒） ---------- */
const mains: Section = {
  title: "MAINS",
  items: [
    {
      name: "CHICKEN PARMIGIANA",
      desc:
        "300g: 27 • 500g: 39 • 1kg: 50 • 2kg: 79. Bread crumbed chicken breast, homemade napoli sauce, ham and melted mozzarella cheese. Served with chips and salad.",
    },
    { name: "CHICKEN SCHNITZEL", price: "26", dots: true, desc: "Served with chips, salad and gravy." },
    {
      name: "SOUVLAKI",
      desc:
        "Served with pita bread, chips, green salad, and tzatziki. Chicken: 25 • Lamb: 27 • Mix: 28",
    },
    { name: "LEMON SALT & PEPPER CALAMARI", price: "28", dots: true, desc: "Fried calamari, chips, green salad and tartare sauce." },
    { name: "CRISPY SKIN SALMON", price: "32", dots: true, desc: "Mashed potato, steamed broccoli, almond flakes and dill hollandaise." },
    { name: "FISHERMAN’S BASKET", price: "29", dots: true, desc: "Flat head fish, calamari, panko prawn. With chips, green salad, lemon wedges, tartare." },
    {
      name: "PORTERHOUSE STEAK",
      desc:
        "250g: 29 • 400g: 42. Served with chips, green salad. Choices of mushroom, gravy or red wine sauce.",
    },
    {
      name: "RIB EYE STEAK (500g)",
      price: "49",
      dots: true,
      desc: "Served with chips, green salad. Choices of mushroom, gravy or red wine sauce.",
    },
    { name: "LAMB SHANK", price: "35", dots: true, desc: "Slow cooked in red wine jus. Served with mashed potatoes and green beans." },
    { name: "SLOW COOK BEEF BRISKET", price: "33", dots: true, desc: "Served with mashed potatoes, gravy and coleslaw." },
    { name: "CHILLI MUSSELS", price: "28", dots: true, desc: "Mussels in napoli sauce with chilli flakes and herbs. Served with bread." },
    { name: "CHICKEN SCALOPPINI", price: "28", dots: true, desc: "Grilled chicken tender, cooked in creamy mushroom sauce. Served with green salad and chips." },
    { name: "FRIED CHICKEN BURGER", price: "25", dots: true, desc: "Crispy chicken, mayo coleslaw, cheddar, burger sauce. With chips." },
    { name: "ANGUS BEEF BURGER", price: "25", dots: true, desc: "Angus patty, bacon, fried egg, lettuce, tomato, cheddar, smoked BBQ. With chips." },
  ],
};

const pasta: Section = {
  title: "PASTA",
  items: [
    { name: "CHILLI GARLIC PRAWN LINGUINE", price: "27", dots: true, desc: "Rich tomato paste with garlic, onion, chilli flakes, capers, cherry tomatoes. Parmesan to finish." },
    { name: "BOLOGNESE SPAGHETTI", price: "25", dots: true, desc: "Bolognese sauce and melted mozzarella cheese." },
    { name: "MUSHROOM CARBONARA LINGUINE", price: "25", dots: true, desc: "Linguine and bacon cooked in creamy mushroom sauce." },
    { name: "HOMEMADE BEEF LASAGNE", price: "25", dots: true, desc: "Served with chips and green salad." },
    { name: "CREAMY CHICKEN PESTO RIGATONI", price: "25", dots: true, desc: "Light cream sauce with basil pesto, garlic, onions, tender chicken. Parmesan to finish." },
  ],
};

const desserts: Section = {
  title: "DESSERTS",
  inverse: true,
  boxed: true,
  items: [
    { name: "STICKY DATE", price: "15", dots: true, desc: "Date pudding with butterscotch sauce and icecream." },
    { name: "LEMON TART", price: "15", dots: true, desc: "Served with icecream and cream." },
    { name: "AFFOGATO", price: "17", dots: true, desc: "Vanilla icecream with a shot of coffee and frangelico." },
    { name: "CHOCOLATE BROWNIE", price: "12", dots: true, desc: "Served with vanilla icecream." },
    { name: "ICECREAM", price: "8", dots: true, desc: "Chocolate / Vanilla / Strawberry" },
  ],
};

const coffee: Section = {
  title: "COFFEE",
  subtitle: "Medium 5",
  items: [
    { name: "Espresso" },
    { name: "Magic" },
    { name: "Piccolo" },
    { name: "Latte" },
    { name: "Cappuccino" },
    { name: "Long Black" },
    { name: "Flat White" },
    { name: "Hot Chocolate" },
    { name: "Mocha" },
  ],
};

const tea: Section = {
  title: "TEA",
  subtitle: "5.5",
  items: [
    { name: "English breakfast / Earl Grey / Peppermint" },
    { name: "Spring Green / Chamomile" },
  ],
};

const addOn: Section = {
  title: "ADD ON",
  subtitle: "0.8",
  items: [
    { name: "Soy Milk / Almond Milk / Lactose Free Milk" },
    { name: "Extra Shot / Strong" },
    { name: "Decaf" },
  ],
};

const juices: Section = {
  title: "JUICES",
  subtitle: "Glass 5  •  Jug 13",
  items: [
    { name: "Pineapple" },
    { name: "Pink Grapefruit" },
    { name: "Cranberry" },
    { name: "Apple" },
    { name: "Mango" },
    { name: "Orange" },
  ],
};

const mocktails: Section = {
  title: "MOCKTAILS",
  subtitle: "Glass 13  •  Jug 27  •  Tower 63",
  items: [
    { name: "VIRGIN PINA COLADA", desc: "Pineapple juice, coconut water, vanilla icecream, fresh kiwi." },
    { name: "VIRGIN MOJITO", desc: "Fresh lime, simple syrup, mint, lemonade." },
    { name: "MOCK MOSCOW MULE", desc: "Fresh lime, simple syrup, ginger beer." },
    { name: "CINDRELLA", desc: "Orange juice, pineapple juice, ginger ale, fresh lemon, grenadine." },
    { name: "KIWI STRAWBERRY SPRITZ", desc: "Fresh strawberries, fresh kiwis, lemonade, raspberry syrup." },
  ],
};

const coldDrinks: Section = {
  title: "COLD DRINKS",
  items: [
    { name: "Milk shake", price: "9", desc: "Chocolate / Strawberry / Banana / Vanilla / Caramel" },
    { name: "Ice Chocolate", price: "8" },
    { name: "Ice Coffee", price: "8" },
    { name: "Ice Mocha", price: "8" },
    { name: "Sparkling Water", price: "4.5" },
    { name: "Soft Drinks", price: "4.5", desc: "Coke / Coke Zero / Diet Coke / Fanta / Lift" },
    { name: "Lemon Lime Bitters", price: "8" },
  ],
};

/* ---------- UI atoms ---------- */
const Rule: React.FC<{ inverse?: boolean }> = ({ inverse }) => (
  <div className={inverse ? "rule rule--inverse" : "rule"} />
);

const InkDots: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={`ink ${className ?? ""}`} aria-hidden>
    <g fill="currentColor" opacity="0.25">
      {Array.from({ length: 130 }).map((_, i) => (
        <circle
          key={i}
          cx={Number((Math.random() * 200).toFixed(2))}
          cy={Number((Math.random() * 200).toFixed(2))}
          r={Number((Math.random() * 1.6 + 0.3).toFixed(2))}
        />
      ))}
    </g>
  </svg>
);

const MenuItem: React.FC<Item> = ({ name, price, desc, flags, dots }) => (
  <div className="item">
    <div className={dots ? "item__row item__row--dots" : "item__row"}>
      <div className="item__name">
        <span>{name}</span>
        {flags && <span className="item__flags"> {flags}</span>}
      </div>
      {price !== undefined && price !== "" && (
        <div className="item__price">{price}</div>
      )}
    </div>
    {desc && <p className="item__desc">{desc}</p>}
  </div>
);

const Panel: React.FC<
  React.PropsWithChildren<{ boxed?: boolean; inverse?: boolean }>
> = ({ boxed, inverse, children }) => (
  <div
    className={[
      "panel",
      boxed ? "panel--boxed" : "",
      inverse ? "panel--inverse" : "",
    ]
      .join(" ")
      .trim()}
  >
    {children}
  </div>
);

const SectionBlock: React.FC<Section> = ({
  title,
  subtitle,
  items,
  boxed,
  inverse,
}) => (
  <Panel boxed={boxed} inverse={inverse}>
    <div className="section__head">
      <h2 className="section__title">{title}</h2>
      {subtitle && <span className="section__subtitle">{subtitle}</span>}
    </div>
    <Rule inverse={inverse} />
    <div>{items.map((it, idx) => <MenuItem key={idx} {...it} />)}</div>
  </Panel>
);

/* ---------- Page ---------- */
export default function BallaratMenu() {
  useDocumentTitle("Ballarat Menu - FAT CHEF");
  return (
    <div className="ballarat-root">
      {/* 背景与墨点 */}
      <div className="paper-bg" />
      <InkDots className="ink--tl" />
      <InkDots className="ink--br" />

      <div className="ballarat-wrap">
        <h1 className="menu-page-title">FAT CHEF Ballarat Menu</h1>
        <div className="grid3">
          {/* Left */}
          <div className="stack">
            <SectionBlock {...signature} />
            <SectionBlock {...desserts} />
          </div>

          {/* Middle */}
          <div className="stack">
            <SectionBlock {...starters} />
            <SectionBlock {...salads} />
            <SectionBlock {...sides} />
            <SectionBlock {...kids} />
          </div>

          {/* Right */}
          <div className="stack">
            <SectionBlock {...mains} />
            <SectionBlock {...pasta} />
            {/* 右下角黑底 Desserts 盒子 */}
          </div>
        </div>

        <div className="divider">
          <span className="divider__line" />
          <span className="divider__label">DRINKS MENU</span>
          <span className="divider__line" />
        </div>

        <div className="drinks-grid">
          <div className="left-col">
            <SectionBlock {...coffee} />
            <SectionBlock {...tea} />
            <SectionBlock {...addOn} />
            <SectionBlock {...juices} />
          </div>

          <div className="right-col">
            <SectionBlock {...mocktails} />
            <SectionBlock {...coldDrinks} />
          </div>
        </div>
      </div>
    </div>
  );
}