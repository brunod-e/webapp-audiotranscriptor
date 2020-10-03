import React from "react";
import "./transcriptor.css";
import Button from "../components/button";

export default () => {
  return (
    <div id="container">
      <div class="logo-container">
        <img src="/images/logo.png" alt="Elint" />
        <h2>Your audio transcription platform</h2>
      </div>
      {/* <img
        src="/images/data-science.png"
        alt="datascience"
        class="data-science"
      /> */}
      <div class="buttons-container">
        <Button label="Upload" />
        <Button label="Classify" />
      </div>
      <div class="how-it-works">
        How it works?
        <img src="/images/icons/howitworks.png" alt="How it works" />
      </div>
    </div>
  );
};
