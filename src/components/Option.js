import React from 'react'
// Stateless
// Passing argument to parent method
const Option = (props) => (
  <div>
    <li>{props.option}</li>
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
