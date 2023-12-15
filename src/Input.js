import React from "react";

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form  className="text" onSubmit={(e) => e.preventDefault()}>
      <label>Add Color</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
