import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "this is item 1",
    },
    {
      id: 2,
      checked: false,
      item: "this is item 2",
    },
    {
      id: 3,
      checked: false,
      item: "this is item 3",
    },
    {
      id: 4,
      checked: false,
      item: "this is item 4",
    },
  ]);

  function handleCheck(id) {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  }
  return (
    <main className="App">
      <Header className="header" />
      <Content
        className="main-content"
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer className="footer" length={items.length} />
    </main>
  );
}

export default App;
