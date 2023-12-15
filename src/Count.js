import { React, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h1>Hello</h1>
      <p>{count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Count;
