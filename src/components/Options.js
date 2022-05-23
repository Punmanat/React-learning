import React from 'react'
import Option from "./Option";
// Stateless
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>

      <ol>
        {props.options.map((o) => (
          <Option
            option={o}
            key={o}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};
export default Options;
