import React, { useState } from "react";
import "./styles.css";

let styleLight = {
  backgroundColor: "yellow",
  color: "black",
  padding: "20px",
  fontWeight: "bold",
};

let styleDark = {
  backgroundColor: "black",
  color: "yellow",
  padding: "20px",
  fontWeight: "bold",
};

function Container(props) {
  let [number, setNumber] = useState(5);

  let addNumber = () => {
    setNumber(number + 1);
  };
  let multiNumber = () => {
    setNumber(number * 2);
  };
  let restoreNumber = () => {
    setNumber((number = 5));
  };

  return (
    // <div className="border-red">
    //     <h4>Title of container</h4>
    //     {props.children}
    // </div>
    <div style={props.mode === "light" ? styleLight : styleDark}>
      <h4>Title of container</h4>
      {props.children}

      <div className="number">
        Other Number
        <button className="button-add" onClick={addNumber}>
          Agregar 1
        </button>
        <button className="button-add" onClick={multiNumber}>
          Multiplicar x2
        </button>
        <button className="button-add" onClick={restoreNumber}>
          Reset
        </button>
        {number}
      </div>
    </div>
  );
}

export default Container;
