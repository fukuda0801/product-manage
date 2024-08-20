import styles from './FormProductDescription.module.css';
import React from 'react';

type FormProductDescriptionProps = {
  productDescription: string;
};

const FormProductDescription = ({
  productDescription,
}: FormProductDescriptionProps) => {
  return (
    <div>
      <label htmlFor="productDescription">説明</label>
      <input
        type="textarea"
        id="productDescription"
        name="productDescription"
        value={productDescription}
        className={styles.formDescription}
      />
    </div>
  );
};

export default FormProductDescription;
