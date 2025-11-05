import React from "react";
import "./KeilorEastMenu.css";

/** ---------- Types ---------- */
interface Item {
  name: string;
  price?: string;      // 空字符串表示该行用描述中的多规格
  desc?: string;
  flags?: string;      // (V/GF) 等
}
interface Section {
  title: string;
  subtitle?: string;
  items: Item[];
  footnote?: React.ReactNode;
  boxed?: boolean;     // 浅色面板
  inverse?: boolean;   // 深色反相面板（Dinner 左栏）
}

/** ---------- (A) DAY MENU 数据：与之前一致，可略改 ---------- */
const breakfast: Section = {
  title: "BREAKFAST",
  subtitle: "9AM – 3PM",
  items: [
    { name: "TOAST, BAGEL", flags: "(V/GFO)", price: "8", desc: "Sourdough / Multigrain / GF / Sesame bagel with butter, peanut butter, raspberry jam or vegemite." },
    { name: "HAM, CHEESE, TOMATO TOASTIES", flags: "(GFO)", price: "9", desc: "Extra $1 for Croissant" },
    { name: "BLT BAGEL", price: "13", desc: "Bacon, lettuce, tomato, and aioli on sesame bagel." },
    { name: "PARMIGIANA TOAST", flags: "(GFO)", price: "14", desc: "Napoli, ham & mozzarella on choice of bread." },
    { name: "EGGS YOUR WAY", flags: "(V/GFO)", price: "14", desc: "Fried, scrambled or poached eggs on choice of bread." },
    { name: "MIX MUSHROOM ON TOAST", flags: "(V/GFO)", price: "21", desc: "Sauté wild mushrooms, cherry tomato, spinach, parmesan, balsamic glaze, truffle oil on multigrain." },
    { name: "EGGS BENNY", flags: "(GFO)", price: "19", desc: "Poached eggs, bacon & hollandaise on English muffin." },
    { name: "MASHED AVOCADO", flags: "(GFO)", price: "21", desc: "Poached eggs, mashed avo, beetroot hummus, feta, dukkah, sundried tomato on sourdough." },
    { name: "CHILLI SCRAMBLED EGGS", flags: "(GFO)", price: "22", desc: "With onion, chilli flakes, corn, parmesan, grilled chorizo, chilli mayo, pepitas & fried shallot." },
    { name: "CHEESY OMELETTE", flags: "(GFO)", price: "20", desc: "Mushroom, sundried tomato & mozzarella on sourdough." },
    { name: "BEEF OMELETTE", flags: "(GFO)", price: "21", desc: "Beef mince, herbs, onion, baby spinach on sourdough. Add mozzarella: $3" },
    { name: "FAT BREKKIE", flags: "(GFO)", price: "29", desc: "Eggs your way, roasted mushroom, avo, grilled chorizo, bacon, hash brown & baked beans." },
    { name: "FAT PANCAKE", flags: "(V)", price: "21", desc: "Pancake with fresh berries, maple syrup & vanilla ice-cream." },
  ],
  footnote: (
    <div className="add-on">
      <div className="add-on__title">ADD ON</div>
      <ul>
        <li>Egg / Cheese / Choice of bread / Hollandaise — <b>$3</b></li>
        <li>Baked beans / Tomato — <b>$4</b></li>
        <li>Avocado / Sauté cup mushroom / Sauté baby spinach — <b>$5</b></li>
        <li>Bacon / Chorizo / Hash brown / Grilled chicken / Halloumi — <b>$6</b></li>
      </ul>
    </div>
  ),
};

const lunch: Section = {
  title: "LUNCH",
  subtitle: "11AM – 4PM",
  items: [
    { name: "CHICKEN PARMIGIANA", price: "", desc: "300g: 27 • 500g: 39 • 1kg: 50 • 2kg: 79. Breaded chicken, napoli, ham & mozzarella. With chips & salad." },
    { name: "CHICKEN SCHNITZEL", price: "25", desc: "With chips, salad & gravy." },
    { name: "CRISPY SEAFOOD BASKET", price: "27", desc: "Calamari, panko prawn, whiting fish. With chips & tartare." },
    { name: "LEMON SALT & PEPPER CALAMARI", price: "26", desc: "Calamari, chips, green salad, tartare." },
    { name: "CHICKEN MUSHROOM", price: "23", desc: "Grilled tenderloins in creamy mushroom. Side salad & chips." },
    { name: "CHEESE STEAK SANDWICH", price: "23", desc: "Steak, bacon, cos, tomato, cheddar & aioli on Turkish roll. With chips." },
    { name: "CHILLI MAYO SCHNITZEL ROLL", price: "21", desc: "Schnitzel, spinach, tomato, melted cheese & chilli mayo on Turkish roll. With chips." },
    { name: "SOUVLAKI PITA POCKET", price: "", desc: "Lamb: 23 • Chicken: 21. Pita wrap with tomatoes, cucumber & tzatziki. With chips." },
    { name: "BOLOGNESE SPAGHETTI", price: "25", desc: "Bolognese & mozzarella." },
    { name: "MUSHROOM CARBONARA LINGUINE", price: "25", desc: "Linguine & bacon in creamy mushroom sauce." },
    { name: "HOMEMADE BEEF LASAGNE", price: "25", desc: "With chips & green salad." },
  ],
};

const burgerDay: Section = {
  title: "BURGER",
  subtitle: "Add on beef patty: $12",
  boxed: true,
  items: [
    { name: "FRIED CHICKEN / SCHNITZEL BURGER", price: "25", desc: "Crispy chicken, coleslaw, cheddar & burger sauce. With chips." },
    { name: "WAGYU BEEF BURGER", price: "25", desc: "Wagyu patty, bacon, fried egg, lettuce, tomato, cheddar, smoked BBQ. With chips." },
    { name: "FISH BURGER", price: "25", desc: "Fried barramundi, lettuce, grilled pineapple & tartare. With chips." },
    { name: "HALLOUMI BURGER (V)", price: "23", desc: "Halloumi, lettuce, tomato, mashed avo, aioli. With chips." },
  ],
};

const saladDay: Section = {
  title: "SALAD",
  items: [
    { name: "HALLOUMI SALAD (V/GF)", price: "21", desc: "Halloumi, spinach, mix salad, cauliflower rice, sauté mushroom, cherry tomato, slaw & honey mustard. Add chicken: $6." },
    { name: "PUMPKIN & QUINOA SALAD (V/GF)", price: "22", desc: "Roasted pumpkin, quinoa, baby spinach, pepitas, cherry tomato, Spanish onion, dried fruit & honey mustard. Add chicken: $6." },
    { name: "SCHNITZEL & AVOCADO SALAD", price: "23", desc: "Baby spinach, avocado, cherry tomato, cucumber, shaved parmesan, schnitzel & mayo dressing." },
  ],
};

const kidsDay: Section = {
  title: "FOR KIDS",
  subtitle: "13  •  Under 10 years old",
  items: [
    { name: "Chicken nuggets and chips" },
    { name: "Ham, cheese toasties and chips" },
    { name: "Kids fish and chips" },
    { name: "Kids Bolognese / Napoli spaghetti" },
  ],
};

/** ---------- (B) DINNER 数据 ---------- */
/* 左列：FAT CHEF SIGNATURE（反色面板） */
const signatureDinner: Section = {
  title: "FAT CHEF SIGNATURE",
  inverse: true,
  items: [
    { name: "SOUVLAKI PLATTER", desc: "Lamb, chicken souvlaki, chorizo, calamari. With pita bread, chips, salad, tzatziki, tartare, capsicum dip.\nFor 2: 79 • For 4–5: 149 • For 8–9: 279" },
    { name: "PARMALAKI PLATTER", desc: "Lamb, chicken souvlaki, calamari, chicken parma (no ham). With pita bread, chips, salad, tzatziki, tartare, capsicum dip.\nFor 2: 99 (500g parma) • For 4–5: 179 (1kg parma) • For 8–9: 299 (2kg parma)" },
    { name: "RIB MASTER PLATTER", desc: "Slow cooked marinated pork ribs, fried chicken wings, chorizo. With coleslaw, chips, fried onion rings.\nFor 2: 85 • For 4–5: 155 • For 8–9: 279" },
    { name: "BEEF LOVERS PLATTER", desc: "Slow cooked BBQ beef ribs, beef steak, grilled prawn skewer, grilled corn cobs, fried onion rings. With coleslaw & chips.\nFor 2: 99 • For 4–5: 179 • For 8–9: 299" },
    { name: "MIXED GRILL PLATTER", desc: "Chicken skewers, lamb skewers, prawn skewers, slice BBQ beef ribs, corn cobs, pineapple. With chips.\nFor 3–4: 185 • For 7–8: 329" },
    { name: "SEAFOOD PLATTER", price: "149", desc: "Fresh oyster (5), baked scallops with cheese (5), fried flat head fish, grilled prawns, chilli mussels. With chips & salad. Add lobster: $70" },
    { name: "WAGYU SIZZLING SLAB", price: "65", desc: "Wagyu steak 300g, scallops, tiger prawns on hot slab. With chips, salad, mushroom sauce & gravy." },
  ],
};

/* 中列：Starters / Salad / Sides / Kids (Dinner) */
const startersDinner: Section = {
  title: "STARTERS",
  items: [
    { name: "Bowl of chips", price: "12" },
    { name: "Cheesy garlic bread", price: "13" },
    { name: "Arancini", price: "14" },
    { name: "Fried chicken wings (cajun)", price: "15" },
    { name: "Fried calamari", price: "18" },
    { name: "Trio dips with pita bread", price: "19" },
    { name: "Fresh oysters (1/2 dozen)", price: "23" },
    { name: "Kilpatrick oysters (1/2 dozen)", price: "25" },
    { name: "Baked oyster w/ cheese (1/2 dozen)", price: "27" },
  ],
};
const saladDinner: Section = {
  title: "SALAD",
  items: [
    { name: "HALLOUMI SALAD (V/GF)", price: "21", desc: "Grilled halloumi with spinach, mixed salad, cauliflower rice, sautéed mushroom, cherry tomatoes, slaw, honey mustard. Add chicken: $6." },
    { name: "PUMPKIN & QUINOA SALAD (V/GF)", price: "22", desc: "Roasted pumpkin, quinoa, baby spinach, mixed salad, pepitas, cherry tomatoes, Spanish onion, dried fruit, honey mustard. Add chicken: $6." },
    { name: "GREEK LAMB SALAD", price: "26", desc: "Grilled lamb, lettuce, olives, cherry tomatoes, Spanish onion, feta, cucumber, olive oil dressing." },
  ],
};
const sidesDinner: Section = {
  title: "SIDES",
  items: [
    { name: "Green salad", price: "10" },
    { name: "Pita bread", price: "2" },
    { name: "Tzatziki / Spicy capsicum dip / Hummus", price: "12" },
    { name: "Red wine jus / Mushroom sauce / Gravy", price: "3" },
    { name: "Mashed potato / Steamed veggies", price: "6" },
  ],
};
const kidsDinner: Section = {
  title: "FOR KIDS",
  subtitle: "13  •  Under 10 years old",
  items: [
    { name: "Chicken nuggets and chips" },
    { name: "Ham, cheese pizza" },
    { name: "Kids fish and chips" },
    { name: "Kids Bolognese / Napoli spaghetti" },
  ],
};

/* 右列：Mains / Pasta / Burger (Dinner) */
const mainsDinner: Section = {
  title: "MAINS",
  items: [
    { name: "CHICKEN PARMIGIANA", price: "", desc: "300g: 27  •  500g: 39  •  1kg: 50  •  2kg: 79. Breaded chicken, napoli, ham & mozzarella. With chips & salad." },
    { name: "CHICKEN SCHNITZEL", price: "25", desc: "With chips, salad & gravy." },
    { name: "SOUVLAKI", price: "", desc: "With pita bread, chips, green salad, tzatziki. Chicken: 25 • Lamb: 27 • Mix: 28" },
    { name: "LEMON SALT & PEPPER CALAMARI", price: "26", desc: "Fried calamari, chips, green salad & tartare." },
    { name: "CRISPY SKIN SALMON", price: "35", desc: "Roasted baby potatoes with rosemary, asparagus, almond flakes & dill hollandaise." },
    { name: "FAT CHEF SIZZLING BEEF", price: "32", desc: "Marinated diced beef on hot plate, mix veggies, Spanish onion, mashed potato, cheese sauce." },
    { name: "PORTERHOUSE STEAK", price: "", desc: "250g: 29  •  400g: 44. With chips, green salad. Sauces: mushroom / gravy / red wine." },
    { name: "RIB EYE STEAK (500g)", price: "54", desc: "With chips, green salad. Sauces: mushroom / gravy / red wine." },
    { name: "LAMB SHANK", price: "38", desc: "Slow cooked in red wine jus. With mashed potato & green beans." },
    { name: "CHILLI MUSSELS", price: "28", desc: "Mussels in napoli sauce with chilli flakes & herbs. With bread." },
  ],
};
const pastaDinner: Section = {
  title: "PASTA",
  items: [
    { name: "CHILLI GARLIC PRAWN LINGUINE", price: "27", desc: "Rich tomato paste with garlic, onion, chilli flakes, capers, cherry tomatoes. Parmesan to finish." },
    { name: "BOLOGNESE SPAGHETTI", price: "25", desc: "Bolognese & mozzarella." },
    { name: "MUSHROOM CARBONARA LINGUINE", price: "25", desc: "Linguine & bacon in creamy mushroom sauce." },
    { name: "HOMEMADE BEEF LASAGNE", price: "25", desc: "With chips & green salad." },
    { name: "CREAMY CHICKEN PESTO RIGATONI", price: "25", desc: "Light cream sauce with basil pesto, garlic, onions, tender chicken. Parmesan to finish." },
    { name: "FAT CHEF SEAFOOD SPAGHETTI", price: "32", desc: "Spaghetti with medley of seafood in Fat Chef sauce, garlic & onion." },
  ],
};
const burgerDinner: Section = {
  title: "BURGER",
  subtitle: "Add on beef patty: $12",
  boxed: true,
  items: [
    { name: "FRIED CHICKEN / SCHNITZEL BURGER", price: "25", desc: "Crispy chicken, mayo coleslaw, cheddar & burger sauce. With chips." },
    { name: "WAGYU BEEF BURGER", price: "25", desc: "Wagyu patty, bacon, fried egg, lettuce, tomato, cheddar, smoked BBQ. With chips." },
    { name: "FISH BURGER", price: "25", desc: "Fried barramundi, lettuce, grilled pineapple & tartare. With chips." },
    { name: "HALLOUMI BURGER (V)", price: "23", desc: "Halloumi, lettuce, tomato, mashed avo, aioli. With chips." },
  ],
};

/** ---------- UI 基元 ---------- */
const Rule: React.FC = () => <div className="rule" />;

const InkDots: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={`ink ${className ?? ""}`} aria-hidden>
    <g fill="currentColor" opacity="0.25">
      {Array.from({ length: 120 }).map((_, i) => (
        <circle key={i}
          cx={Number((Math.random() * 200).toFixed(2))}
          cy={Number((Math.random() * 200).toFixed(2))}
          r={Number((Math.random() * 1.8 + 0.2).toFixed(2))} />
      ))}
    </g>
  </svg>
);

const MenuItem: React.FC<Item> = ({ name, price, desc, flags }) => (
  <div className="item">
    <div className="item__row">
      <div className="item__name">
        <span>{name}</span>{flags && <span className="item__flags"> {flags}</span>}
      </div>
      {price !== undefined && price !== "" && (
        <div className="item__price">{price}</div>
      )}
    </div>
    {desc && <p className="item__desc">{desc}</p>}
  </div>
);

const Panel: React.FC<React.PropsWithChildren<{ boxed?: boolean; inverse?: boolean }>> = 
({ boxed, inverse, children }) => (
  <div className={[ 
    "panel",
    boxed ? "panel--boxed" : "",
    inverse ? "panel--inverse" : ""
  ].join(" ").trim()}>
    {children}
  </div>
);

const MenuSection: React.FC<Section> = ({ title, subtitle, items, footnote, boxed, inverse }) => (
  <Panel boxed={boxed} inverse={inverse}>
    <div className="section__head">
      <h2 className="section__title">{title}</h2>
      {subtitle && <span className="section__subtitle">{subtitle}</span>}
    </div>
    <Rule />
    <div>{items.map((it, idx) => <MenuItem key={idx} {...it} />)}</div>
    {footnote}
  </Panel>
);

/** ---------- 页面组件 ---------- */
export default function KeilorEastMenu() {
  return (
    <div className="menu-root">
      {/* 背景与墨点 */}
      <div className="paper-bg" />
      <InkDots className="ink--tl" />
      <InkDots className="ink--br" />

      <div className="container">
        <h1 className="menu-page-title">FAT CHEF Keilor East Menu</h1>
        {/* ===== Day Menu 三栏 ===== */}
        <div className="grid">
          <div><MenuSection {...breakfast} /></div>
          <div><MenuSection {...lunch} /></div>
          <div className="col-right">
            <MenuSection {...burgerDay} />
            <MenuSection {...saladDay} />
            <MenuSection {...kidsDay} />
          </div>
        </div>

        {/* ===== 分割带（明显） ===== */}
        <div className="divider">
          <span className="divider__line" />
          <span className="divider__label">DINNER • 4PM–9PM</span>
          <span className="divider__line" />
        </div>

        {/* ===== Dinner 三栏 ===== */}
        <div className="grid">
          {/* 左：Signature（深色反相） */}
          <div>
            <MenuSection {...signatureDinner} />
          </div>

          {/* 中：Starters / Salad / Sides / Kids */}
          <div className="col-mid">
            <MenuSection {...startersDinner} />
            <MenuSection {...saladDinner} />
            <MenuSection {...sidesDinner} />
            <MenuSection {...burgerDinner} />
          </div>

          {/* 右：Mains / Pasta / Burger（Burger 盒装） */}
          <div className="col-right">
            <MenuSection {...mainsDinner} />
            <MenuSection {...pastaDinner} />
            <MenuSection {...kidsDinner} />
          </div>
        </div>

        {/* ===== Drinks（新分区） ===== */}
        <DrinksBlock />

        {/* ===== Cocktails（新分区） ===== */}
        <CocktailsBlock />
      </div>
    </div>
  );
}

/* ========= 追加：Drinks 数据与组件 ========= */

/** Wine 表格行 */
interface WineRow { name: string; g?: string; b?: string; }

/* WINE 数据 */
const wineRed: WineRow[] = [
  { name: "Shiraz", g: "9", b: "35" },
  { name: "Cabernet Sauvignon", g: "9", b: "35" },
  { name: "Merlot", g: "9", b: "35" },
  { name: "Pinot Noir", g: "9", b: "35" },
];
const wineWhite: WineRow[] = [
  { name: "Sauvignon Blanc", g: "9", b: "35" },
  { name: "Pinot Grigio", g: "9", b: "35" },
  { name: "Chardonnay", g: "9", b: "35" },
  { name: "Moscato", g: "9", b: "35" },
  { name: "Rose", g: "9" },
];
const wineSparkling: WineRow[] = [
  { name: "Prosecco", g: "8" },
  { name: "Brut Cuvee", g: "8" },
];

/* 其他分组 */
const spirits = {
  gin: ["Hendrick’s", "Bombay sapphire", "Tanqueray"],
  tequila: ["Patron reposado", "Sierra"],
  rum: ["Bacardi-white rum", "Bundaberg", "Kraken-dark rum"],
  vodka: ["Absolut", "Absolut Raspberry", "Absolut vanilla"],
};

const shots: { name: string; price: string; desc: string }[] = [
  { name: "Mind Eraser", price: "$8", desc: "Vodka, Kahlua, Sparkling water" },
  { name: "Jam Donut", price: "$8", desc: "Chambord, Baileys, sugar rim" },
  { name: "Cool Colada", price: "$8", desc: "White Rum, Coconut Liquor, Pineapple Juice" },
  { name: "Kamikaze", price: "$8", desc: "Vodka, Orange liqueur, Lime Juice" },
];

const bourbon = ["Maker’s mark", "Jack Daniels", "Jim beam", "Wild turkey", "Woodford reserve"];
const whiskey = [
  "Johnny walker red", "Johnny walker black", "Canadian club", "Jameson",
  "Chivas 12 yrs", "Chivas 18 yrs", "Talisker 10yrs", "Ardbeg", "Glenfiddich",
];

/* 小组件：分组副标题 */
const SubHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="dr-subhead">{children}</div>
);

/* Wine 表格 */
const WineTable: React.FC<{ title: string; rows: WineRow[] }> = ({ title, rows }) => (
  <div className="wine-block">
    <SubHead>{title}</SubHead>
    <table className="wine-table">
      <thead>
        <tr>
          <th className="w-name"></th>
          <th className="w-g">G</th>
          <th className="w-b">B</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td className="w-name">{r.name}</td>
            <td className="w-g">{r.g ?? ""}</td>
            <td className="w-b">{r.b ?? ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* Drinks 主块（三栏） */
const DrinksBlock: React.FC = () => (
  <>
    {/* 分割带 */}
    <div className="divider">
      <span className="divider__line" />
      <span className="divider__label">DRINKS</span>
      <span className="divider__line" />
    </div>

    <div className="dr-grid">
      {/* 左：WINE */}
      <div className="dr-col">
        <div className="section__head">
          <h2 className="section__title">WINE</h2>
        </div>
        <div className="dr-wine">
          <WineTable title="RED" rows={wineRed} />
          <WineTable title="WHITE" rows={wineWhite} />
          <div className="wine-block">
            <SubHead>SPARKLING</SubHead>
            <table className="wine-table">
              <thead>
                <tr>
                  <th className="w-name"></th>
                  <th className="w-g">G</th>
                  <th className="w-b">B</th>
                </tr>
              </thead>
              <tbody>
                {wineSparkling.map((r, i) => (
                  <tr key={i}>
                    <td className="w-name">{r.name}</td>
                    <td className="w-g">{r.g ?? ""}</td>
                    <td className="w-b">{r.b ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 中：SPIRITS */}
      <div className="dr-col">
        <div className="section__head">
          <h2 className="section__title">SPIRITS</h2>
        </div>
        <div className="dr-listgroup">
          <SubHead>GIN</SubHead>
          <ul className="dr-list">{spirits.gin.map((s, i) => <li key={i}>{s}</li>)}</ul>

          <SubHead>Tequilla</SubHead>
          <ul className="dr-list">{spirits.tequila.map((s, i) => <li key={i}>{s}</li>)}</ul>

          <SubHead>Rum</SubHead>
          <ul className="dr-list">{spirits.rum.map((s, i) => <li key={i}>{s}</li>)}</ul>

          <SubHead>Vodka</SubHead>
          <ul className="dr-list">{spirits.vodka.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      </div>

      {/* 右：SHOTS + BOURBON + WHISKEY */}
      <div className="dr-col">
        <div className="section__head"><h2 className="section__title">SHOTS</h2></div>
        <div className="shots">
          {shots.map((s, i) => (
            <div className="shot-item" key={i}>
              <div className="shot-row">
                <span className="shot-name">{s.name}</span>
                <span className="shot-price">{s.price}</span>
              </div>
              <div className="shot-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="section__head mt24"><h2 className="section__title">Bourbon whiskey</h2></div>
        <ul className="dr-list">{bourbon.map((s, i) => <li key={i}>{s}</li>)}</ul>

        <div className="section__head mt24"><h2 className="section__title">Whiskey</h2></div>
        <ul className="dr-list">{whiskey.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>
    </div>
  </>
);


/* ========= Cocktails（与 DRINKS 同页） ========= */

interface CocktailItem {
  name: string;
  desc: string;
}

const cocktailsLeft: CocktailItem[] = [
  { name: "BULLFROG", desc: "Vodka, Tequila, Rum, Cointreau, Gin, sugar syrup, lemon juice, blue curacao – topped with Red Bull" },
  { name: "ESPRESSO MARTINI", desc: "Vodka, Kahlua, espresso, simple syrup – shaken, served in martini glass" },
  { name: "OLD FASHIONED", desc: "Bourbon whiskey, simple syrup, classic bitters – stirred, served over ice" },
  { name: "MOJITO", desc: "White rum, lime wedges, mint, simple syrup – muddled, crushed ice, dash of soda" },
  { name: "PINK GIN SPRITZ", desc: "Sparkling wine, pink gin – topped with lemonade, strawberry garnish (wine glass)" },
  { name: "LONG ISLAND", desc: "Vodka, tequila, gin, rum, Cointreau, simple syrup, lemon juice – shaken, over Coca-Cola" },
  { name: "PINA’S COLADA", desc: "Malibu, rum, pineapple juice, vanilla ice cream, fresh kiwi – blended" },
  { name: "SOURPUSS", desc: "Raspberry vodka, lemon juice, sugar syrup, pink grapefruit juice – shaken, martini glass, fairy floss on top" },
];

const cocktailsRight: CocktailItem[] = [
  { name: "PASSIONELLA", desc: "Vodka, lemon juice, apple juice, peach schnapps, passionfruit, simple syrup – shaken, vanilla sugar-rim martini glass" },
  { name: "COSMOPOLITAN", desc: "Vodka, Cointreau, freshly squeezed lime juice, cranberry juice – shaken, served" },
  { name: "FROZEN DAIQUIRI", desc: "Rum, Cointreau, lime juice, sugar syrup – blended with ice (lime / mango / strawberry)" },
  { name: "MOSCOW MULE", desc: "Vodka, fresh lime wedges, sugar syrup – topped with spicy ginger beer" },
  { name: "TOBLERONE", desc: "Baileys, Frangelico, Kahlua – blended with ice cream, served" },
  { name: "SEX ON THE BEACH", desc: "Vodka, peach schnapps, orange juice, cranberry juice" },
  { name: "FRUIT TINGLE", desc: "Vodka, blue curacao, lemonade, grenadine" },
  { name: "MARGARITA", desc: "Tequila, triple sec, simple syrup, lime juice" },
];

const CocktailItemRow: React.FC<{ idx: number; item: CocktailItem }> = ({ idx, item }) => (
  <div className="ck-item">
    <div className="ck-name">
      <span className="ck-index">{idx}.</span>
      <span>{item.name}</span>
    </div>
    <p className="ck-desc">{item.desc}</p>
  </div>
);

const CocktailsColumn: React.FC<{ items: CocktailItem[]; startIndex: number }> = ({ items, startIndex }) => (
  <div className="ck-col">
    {items.map((it, i) => (
      <CocktailItemRow key={i} idx={startIndex + i} item={it} />
    ))}
  </div>
);

export const CocktailsBlock: React.FC = () => (
  <>
    {/* 分割带（与页面现有 divider 样式一致） */}
    <div className="divider">
      <span className="divider__line" />
      <span className="divider__label">COCKTAILS</span>
      <span className="divider__line" />
    </div>

    {/* 两栏鸡尾酒清单 */}
    <div className="ck-grid">
      <CocktailsColumn items={cocktailsLeft} startIndex={1} />
      <CocktailsColumn items={cocktailsRight} startIndex={9} />
    </div>

    {/* 价格脚注 */}
    <div className="ck-price">
      <div>COCKTAIL GLASS <span className="dots" /> <b>$18</b></div>
      <div>JUGS <span className="dots" /> <b>$48</b></div>
    </div>
  </>
);
