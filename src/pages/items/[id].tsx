import React from 'react';
import styles from './id.module.css';
import FormTitle from '../../../components/form/FormTitle';
import Image from 'next/image';

const ProductCreate = () => {
  return (
    <div className={styles.idProductContent}>
      <div className={styles.idProductForm}>
        <div className={styles.idGroup}>
          <FormTitle title="商品詳細" />
          <hr />
          <div className={styles.idId}>
            <p>ID</p>
            <p>1</p>
          </div>

          <div className={styles.productName}>
            <p>商品名</p>
            <p>おにぎり</p>
          </div>

          <div className={styles.productPrice}>
            <p>価格</p>
            <p>300円</p>
          </div>

          <div className={styles.productDetails}>
            <p>説明</p>
            <p>説明説明説明説明説明説明説明説明説明</p>
          </div>
        </div>

        <div>
          <Image
            src="/sukiyaki.jpeg"
            alt="商品の画像"
            width={200}
            height={150}
            className={styles.productImg}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
