import { React, useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import apiRequest from "./apiRequest";

const Content = () => {
  const API_URL = "https://dummyjson.com/posts";
  const [item, setItem] = useState([]);
  const [fetchError, setFetchError] = useState([]);
  // const addItem = async (item) => {
  //   const id = item.length ? item[item.length - 1].id + 1 : 1;
  //   const myNewItem = { id, checked: false, item };
  //   const listItems = [...item, myNewItem];
  //   setItem(listItems);

  //   const postOption = {
  //     method: "POST",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(myNewItem),
  //   };
  //   const result = await apiRequest(API_URL, postOption);
  //   if (result) setFetchError(result);
  // };

  // useEffect(() => {
  //   const fetchItem = async () => {
  //     try {
  //       const response = await fetch(API_URL);

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const listItem = await response.json();
  //       setFetchError(null);
  //       console.log(listItem);
  //       setItem(listItem);
  //     } catch (error) {
  //       // setFetchError(err.message);
  //     }
  //   };
  //   setTimeout(() => {
  //     (async () => await fetchItem())();
  //   });
  // }, []);

  const handleCheck = (id) => {
    const listItems = item.map((item) =>
      item.posts.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = item.filter((item) => item.id !== id);
    setItem(listItems);
    localStorage.setItem("shoppingliST", JSON.stringify(listItems));
  };

  return (
    // Add classes to your JSX
    <div className="item-list">
      {item.map((item) => (
        <li className="item" key={item.posts.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.posts.id)}
            checked={item.checked}
            className="checkbox"
          />
          <label className="item-label">{item.posts.item}</label>
          <FaTrashAlt
            onClick={() => handleDelete(item.posts.id)}
            className="delete-icon"
            role="button"
            tabIndex="0"
          />
        </li>
      ))}
    </div>
  );
};

export default Content;
