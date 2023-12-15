import React from "react";

const Color = ({ colorValue }) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  );
};

Color.defaultProps = {
  colorValue: "empty Value",
};
export default Color;
