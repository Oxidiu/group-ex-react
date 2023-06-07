import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const updateItem = (index, text) => {
    const newItems = [...items];
    newItems[index] = text;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div>
      <input
        onChange={(ev) => {
          let text = ev.target.value;
          setInputText(text);
        }}
        type="text"
      />
      <button
        onClick={() => {
          let itemsNew = [...items, inputText];
          setItems(itemsNew);
        }}
      >
        Add Item
      </button>
      {items.map((item, i) => (
        <CardComponent 
          content={item} 
          key={`cardcpmp ${i}`} 
          index={i}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default App;
