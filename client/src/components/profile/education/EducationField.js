// ProfileField contains logic to render a single
// label and text input

import React from "react";

export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        style={{ marginBottom: "5px" }}
        placeholder={label}
        type={type}
      />
      <div className="red-text">{touched && error}</div>
    </div>
  );
};
