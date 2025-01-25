import React from "react";
import Button from "./Button";

function Photo() {
  const parentStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    marginLeft: "2rem"
  };
  const photoDivStyle = {
    width: "50%",
    aspectRatio: "1/1",
    background: "lightgrey",
    border: "2px solid dimgray",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const hrStyle = {
    height: "2px",
    borderTop: "2px solid #aaa",
    marginTop: "2rem",
    marginBottom: "2rem",
  };
  return (
    <div style={parentStyle}>
      <div style={photoDivStyle}></div>
      <div style={hrStyle}></div>
      <Button bgColor='black' txtColor='white'>Upload Photo</Button>
    </div>
  );
}

export default Photo;
