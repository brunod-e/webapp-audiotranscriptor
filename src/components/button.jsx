import React from "react";

export default (props) => (
  <div id="button" className="button">
    <button class={props.label}>
      <img src={`/images/icons/${props.label}.png`} alt={props.label} />
      {props.label}
    </button>
  </div>
);
