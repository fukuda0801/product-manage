import styles from './FormTitle.module.css';
import React from 'react';

type FormTitleProps = {
  title: string;
};

const FormTitle = ({ title }: FormTitleProps) => {
  return (
    <div>
      <h1 className={styles.formTitle}>{title}</h1>
    </div>
  );
};

export default FormTitle;
