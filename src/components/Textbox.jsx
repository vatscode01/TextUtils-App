//rfc

import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");

  const convertToUpper = () => {
    let temp = text.toUpperCase();
    setText(temp);
    props.handleWarning("Converted to Uppercase", "success");
    // console.log("UpperCase Button was clicked: " + text);
  };
  const convertToLower = () => {
    let temp = text.toLowerCase();
    setText(temp);
    props.handleWarning("Converted to Lowercase", "success");
    // console.log("LowerCase Button was clicked: " + text);
  };
  const handleOnChange = (event) => {
    // console.log("Text Changed");
    setText(event.target.value);
  };
  const clearData = () => {
    setText("");
    props.handleWarning("Text Cleared", "danger");
  };

  const copyText = () => {
    // let newText=document.getElementById("myBox");
    // newText.select();

    let temp = text;
    navigator.clipboard.writeText(temp);
    props.handleWarning("Text Copied", "success");
  };

  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.handleWarning("Extra Spaces cleared", "success");
  };

  const reverseData = () => {
    let str = { text };
    // console.log(str);
    const ReverseString = (str) => [...str].reverse().join("");
    setText(ReverseString);
    props.handleWarning("Text reversed", "success");
  };
  return (
    <div>
      <h2>{props.heading}</h2>
      {/* <h2>{text}</h2> */}
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "#c7c5c5" : "#404040",
            color: props.mode === "light" ? "black" : "white",
          }}
        />
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={convertToUpper}
        >
          To Upper
        </button>
        <button
          className="btn btn-primary mx-1 "
          onClick={convertToLower}
        >
          To Lower
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={reverseData}
        >
          Reverse
        </button>
        <button
          className="btn btn-primary mx-1 "
          onClick={removeSpaces}
        >
          Remove extra space
        </button>
        <button className="btn btn-success mx-1 " onClick={copyText}>
          Copy text
        </button>

        <button
          className="btn btn-danger mx-1 my-2"
          onClick={clearData}
        >
          Clear
        </button>
        <div className="container">
          <h2 className="my-1">Text Summary</h2>
          {text.split(" ").filter((t)=>t!=="").length} words and {text.length} characters
          <hr />
          <b>Do you know: </b> It will take {0.0032 * text.split(" ").filter((t)=>t!=="").length}{" "}
          minutes for an average reader to read this passage.
          <hr />
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something above !!☝️"}</p>
        </div>
        <hr />
      </div>
    </div>
  );
}
