import React, { useState, useRef } from "react";
import "./App.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const minus = useRef("");
  const plus = useRef("");

  const handleChange = (e, type) => {
    if (type === "plus") {
      console.log(plus);
      plus.current.style.backgroundColor = "chocolate";
      minus.current.style.backgroundColor = "white";
      plus.current.style.color = "white";
      minus.current.style.color = "chocolate";
      setCount(count + 1);
    } else {
      minus.current.style.backgroundColor = "chocolate";
      plus.current.style.backgroundColor = "white";
      minus.current.style.color = "white";
      plus.current.style.color = "chocolate";
      setCount(count - 1);
    }
  };

  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <div className="child-card">
            <button
              ref={minus}
              onClick={(e) => handleChange(e, "minus")}
              className="block minus_button"
            >
              {" "}
              -{" "}
            </button>
          </div>
          <div
            className="child-card block"
            style={{ backgroundColor: "mistyrose" }}
          >
            {count}
          </div>
          <div className="child-card">
            <button
              ref={plus}
              onClick={(e) => handleChange(e, "plus")}
              className="block plus_button"
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
