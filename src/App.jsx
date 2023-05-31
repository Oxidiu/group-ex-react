import React, {useState} from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  


  return (
    <div>
      <input onChange={(ev) => {
        setInputText(ev.target.value)
        console.log(inputText)
      }}/>
      <button onClick={() => {
        setItems([...items, inputText])
        console.log(items)
      }}>Add Item</button>

      {items.map((item, i) => {
        return <CardComponent key={`item number ${i}`}
        content={item}
        />
      })}
      
    </div>
  );
}

export default App;
