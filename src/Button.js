import React from "react";

function Button({ children, bgColor, txtColor, flex }) {
  const buttonStyle = {
    color: txtColor,
    background: bgColor,
    borderRadius: ".3rem",
    marginRight: "1rem",
    padding: ".5rem 1rem",
    fontSize: "1.1rem",
    border: "none",
    marginTop: flex ? "auto" : null,
    flex: flex ? flex : null,
  };
  return <button style={buttonStyle}>{children}</button>;
}

export default Button;
