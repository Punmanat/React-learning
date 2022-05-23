import React from "react";
// Stateless
// Passing argument to parent method
const Option = (props) => (
  <div>
    {props.option}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.option);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
