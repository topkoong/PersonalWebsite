import React from "react";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  info,
  error,
  value,
  onChange
}) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <textarea
          className="materialize-textarea"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
