import styles from './FormProductValue.module.css';
import React from 'react';

type FormProductValueProps = {
  productValue: number;
};

const FormProductValue = ({productValue}: FormProductValueProps) => {
  return (
    <div>
      <label htmlFor="productValue">価格</label>
      <input
        type="text"
        id="productValue"
        name="productValue"
        value={productValue}
        className={styles.formValue}
      />
    </div>
  );
};

export default FormProductValue;
