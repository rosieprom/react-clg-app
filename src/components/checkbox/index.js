import React from 'react';
import styles from "./Checkbox.module.css";

const Checkbox = ({label, value, checked, onChange}) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {checked ? (
        <p className={styles.checkboxLabelText}>
          <strike>{label}</strike>
        </p>
      ) : (
        <p className={styles.checkboxLabelText}>{label}</p>
      )}
    </label>
  );
};

export default Checkbox;
