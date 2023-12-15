import "./App.css";
import Header from "./Header";
import Content from "./Content";
import AddItem from "./AddItem";
// import Color from "./Colors";
// import Input from "./Input";
import { useState } from "react";

function App() {
  // const myNewItem = { id, checked: false, item };
  const [colorValue, setColorValue] = useState("");
  const [items, setItem] = useState("");
  const [newItem, setNewItem] = useState("");

  // const postOption = {
  //   method: "POST",
  //   headers: {
  //     "content-Type": "application/json",
  //   },
  //   body: JSON.stringify(myNewItem),
  // };

  const setAndSaveItems = (newItem) => {
    setItem(newItem);
    localStorage.setItem("list", JSON.stringify(newItem));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    // const listItem = [...items, myNewItem];
    // setAndSaveItems(listItems);
  };

  // const handleCheck = (id) => {
  //   const listItems = item.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setAndSaveItems(listItems);
  // };

  // const handleDelete = (id) => {
  //   const listItems = item.filter((item) => item.id !== id);
  //   setAndSaveItems(listItems);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title="Student List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content />
      {/* <Footer />
      {/* <Color colorValue={colorValue} />
      <Input colorValue={colorValue} setColorValue={setColorValue} /> */}
    </div>
  );
}

export default App;
