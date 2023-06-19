import React, { useState, useRef } from "react";
import colorNames from "colornames";

const AddColor = () => {
  const [color, setColor] = useState("");
  const [hexa, setHexa] = useState("");

  const colorContainerRef = useRef('')

  return (
    <section>
      <div
        className="color-container"
        style={{
          backgroundColor: color,
          width: "300px",
          height: "300px",
          border: "1px solid gray",
        }}
        ref={colorContainerRef}
      >
        <p>{color ? color : "Empty Value"}</p>
        <p>{hexa ? hexa : null}</p>
      </div>

      <div className="search-color-container white-color">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            autoFocus
            required
            placeholder="Add color name"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setHexa(colorNames(e.target.value));
            }}
          />

          <button type="button"
            onClick={()=> colorContainerRef.current.classList.toggle("white-color")}
          >Toggle Text Color</button>
        </form>
      </div>
    </section>
  );
};

export default AddColor;
