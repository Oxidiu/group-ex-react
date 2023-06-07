import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";
import Login from "./Login"
import "./Login.css"

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  const handleUserName = (value) => {
    setUserName(value)
  }
  const handleLogin = () => {
    setLoggedIn(!loggedIn)
    console.log(loggedIn)
    
    
  }
  

  const updateItem = (index, text) => {
    let toUpdateItems = [...items];
    toUpdateItems[index] = text;
    setItems(toUpdateItems);
  };

  const deleteItem = (index) => {
    // needs to delete the item in the items array
    let toUpdateItems = [...items];
    toUpdateItems.splice(index, 1);
    setItems(toUpdateItems);
  };

  return (
    <div>
      <Login 
      loggedIn={loggedIn}
      handleLogin={handleLogin}
      userName={userName}
      handleUserName={handleUserName}
      />
      <input className={loggedIn === true ? "": "hidden"}
        onChange={(ev) => {
          let text = ev.target.value;
          setInputText(text);
        }}
        type="text"
        value={inputText}
      />
      <button className={loggedIn === true ? "": "hidden"}
        onClick={(ev) => {
          let itemsNew = [...items, inputText];
          setItems(itemsNew);
          setInputText("");
        }}
      >
        Add Item
      </button>
      {items.map((item, index) => (
        <CardComponent
        loggedIn={loggedIn}
          updateItem={updateItem}
          deleteItem={deleteItem}
          index={index}
          content={item}
        ></CardComponent>
      ))}
      <button className={loggedIn === true ? "": "hidden"} onClick={handleLogin}>Log Out</button>
    </div>
  );
}

export default App;
