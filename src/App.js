import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./menu";
import items from "./data";
const allcategories = [
  "all",
  ...new Set(items && items.map((item) => item.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allcategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <div className="root">
      console.log("hello");
      <main>
        <secttion className="menu section">
          <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </secttion>
      </main>
    </div>
  );
}

export default App;
