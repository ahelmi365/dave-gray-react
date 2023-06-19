import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import AddColor from "./AddColor";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
  //CONSTS
  const API_URL = "http://localhost:3500/items";

  // useStates
  const [newItem, setNewItem] = useState("");
  const [search, SetSearch] = useState("");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffects
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw Error("Did not revieve expected data from the server");
          }
          const listItems = await response.json();
          setItems(listItems);
          setFetchError(null);
        } catch (error) {
          setFetchError(error.message);
        } finally {
          setIsLoading(false);
        }
      })();
    }, 3000);
  }, []);

  // functions
  const handleCheck = async (id) => {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });

    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, updateOptions);
    if (result) {
      console.log(result);
      setFetchError(result);
    }
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);

    const deleteOptions = { method: "DELETE" };
    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, deleteOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const handleSubmitItem = (e) => {
    e.preventDefault();
    if (!newItem) return;

    // addItem()
    addNewItem(newItem);
    setNewItem("");
    e.target.focus();
  };

  const addNewItem = async (newItem) => {
    const myNewItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      item: newItem,
    };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) {
      setFetchError(result);
    }
  };

  // App function return
  return (
    <main className="App">
      <Header className="header" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmitItem={handleSubmitItem}
      />

      <SearchItem search={search} SetSearch={SetSearch} />
      <main className="main-content">
        {isLoading && <p style={{ color: "blue" }}>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}

        {!fetchError && !isLoading && (
          <Content
            items={items?.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      {/* <AddColor/> */}

      <Footer className="footer" length={items?.length} />
    </main>
  );
}

export default App;
