// ProjectSocialField contains logic to render a single
// label and text input

import React from "react";

export default ({ input, label, icon, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <span>
        <i className={icon} />
      </span>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text">{touched && error}</div>
    </div>
  );
};
