import React from "react";
import Option from "./Option";
// Stateless
const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>

    {props.options.map((o) => (
      <Option
        option={o}
        key={o}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
