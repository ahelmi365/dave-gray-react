import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    console.log(items);
  },[]);
  function handleCheck(id) {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });

    setAndSaveItems(listItems);
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);

    setAndSaveItems(listItems);
  }

  function handleSubmitItem(e) {
    e.preventDefault();
    console.log(newItem);
    if (!newItem) return;

    // addItem()
    addNewItem(newItem);
    setNewItem("");
  }

  function addNewItem(newItem) {
    const myNewItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      item: newItem,
    };
    const listItems = [...items, myNewItem];

    setAndSaveItems(listItems);
  }

  const setAndSaveItems = (items) => {
    setItems(items);
    localStorage.setItem("shoppingList", JSON.stringify(items));
  };
  return (
    <main className="App">
      <Header className="header" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmitItem={handleSubmitItem}
      />
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
