import styles from './FormProductId.module.css';
import React from 'react';

type FormProductIdProps = {
  id: number;
}

const FormProductId = ({id}: FormProductIdProps) => {
  return (
    <div>
      <label htmlFor="id">ID</label>
      <input type="text" value={id} id='id' name='id' className={styles.formId} />
    </div>
  );
};

export default FormProductId;
