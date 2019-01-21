import React from "react";
import "./shoeIndex.css";

const ShoeOptions = ({ optionClicked, i, addTest, shoeClicked }) => {
  return (
    <div className="shoe-options" onClick={() => shoeClicked()}>
      <div className="options-add" onClick={() => optionClicked("Add", i)}>
        Add
      </div>
      <div className="options-edit" onClick={() => optionClicked("Edit", i)}>
        Edit
      </div>
      <div
        className="options-remove"
        onClick={() => optionClicked("Remove", i)}
      >
        Remove
      </div>
    </div>
  );
};

export default ShoeOptions;
