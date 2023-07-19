import React from "react";
import ColorList from "./ColorList";
function ColorItem(props){
  return <li style={{color:props.color}}>{props.color}</li>
}
function App() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
const ColorEl = colors.map((color)=>{
  return <li  key={color} style={{color: color}}>{color}</li>
})
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
       {ColorEl}
      </ol>
    </div>
  );
}

export default App;

