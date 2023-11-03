import React from "react";

const InputDate = ({ icon, name, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor="full-name">
        <i className={icon} />
      </label>
      <input
        type="date"
        id={name}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputDate;
