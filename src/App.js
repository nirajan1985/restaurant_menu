import React, { useState } from "react";
import logo from "./logo.jpg";
import "./index.css";
import Categories from "./Categories";
import Menu from "./Menu";
import Items from "./Data";

const allCategories = ["all", ...new Set(Items.map((item) => item.category))];

const App = () => {
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("");
  const [menuItems, setMenuItems] = useState(Items);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(Items);
    } else {
      const newItems = Items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h1>indisk restaurant</h1>
          <h2 className="meny">Meny</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />
      <Menu menuItems={menuItems} />
    </main>
  );
};

export default App;
