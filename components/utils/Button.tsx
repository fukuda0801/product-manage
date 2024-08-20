import styles from './Button.module.css';
import React from 'react';

type ButtonUtilProps = {
  label: string;
};

const ButtonUtil = ({ label }: ButtonUtilProps) => {
  return (
    <div>
      <button type="button" className={styles.utilsButton}>{label}</button>
    </div>
  );
};

export default ButtonUtil;
