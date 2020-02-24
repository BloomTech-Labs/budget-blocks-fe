import React from "react";

const CheckboxItem = ({ label, isSelected, onCheckboxChange, name }) => {
  return (
    <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={name}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
  )
};

export default CheckboxItem;