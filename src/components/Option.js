import React from "react";
// Stateless
// Passing argument to parent method
const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}.{props.option}
    </p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.option);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
