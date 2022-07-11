import React from "react";

function Button({ btnText, paddings, bgColor, textColor, disabled, onClick }) {
  return (
    <button
      style={{
        padding: paddings ? paddings : ".4rem 1.2rem",
        backgroundColor: bgColor ? bgColor : "f1f1f1",
        color: textColor ? textColor : "black",
        margin: ".5rem",
        border: "none",
        borderRadius: ".3rem",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
