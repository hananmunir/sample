import React from "react";

function Input({
  label,
  placeholder,
  type,
  id,
  value,
  onChange,
  onBlur,
  error,
}) {
  return (
    <div style={{ marginBottom: ".6rem", alignItems: "center" }}>
      <div>
        <label>{label}</label>
        <input
          style={{
            padding: ".6rem .5rem",
            marginLeft: ".5rem",
            border: "1px solid #ccc",
            borderRadius: ".3rem",
            width: "45%",
            borderColor: error ? "red" : "",
          }}
          placeholder={"Enter " + placeholder}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <span style={{ fontSize: ".9rem" }}>{error}</span>
    </div>
  );
}

export default Input;
