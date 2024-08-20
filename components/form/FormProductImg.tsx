import Image from 'next/image';
import styles from './FormProductImg.module.css';
import React from 'react';

type FormProductImgProps = {
  src: string;
};

const FormProductImg = ({ src }: FormProductImgProps) => {
  return (
    <div className={styles.formImgContent}>
      <div className={styles.formImgGroup}>
        <label htmlFor={styles.productImg}>画像</label>
        <input
          type="file"
          id={styles.productImg}
          name="productImg"
          className={styles.formImgInput}
        />
      </div>
      <Image src={src} alt="商品の画像" width={100} height={100} />
    </div>
  );
};

export default FormProductImg;
