import React from 'react';
import styles from './create.module.css';
import FormTitle from '../../../components/form/FormTitle';
import FormProductId from '../../../components/form/FormProductId';
import FormProductName from '../../../components/form/FormProductName';
import FormProductValue from '../../../components/form/FormProductValue';
import FormProductDescription from '../../../components/form/FormProductDescription';
import FormProductImg from '../../../components/form/FormProductImg';
import ButtonUtil from '../../../components/utils/Button';

const ProductCreate = () => {
  return (
    <div className={styles.createFormContent}>
      <div className={styles.createForm}>
        <div className={styles.inputGroup}>
          <FormTitle title="商品登録" />
          <hr />
          <FormProductId id={1}/>
          <FormProductName productName="商品１" />
          <FormProductValue productValue={300} />
          <FormProductImg src="/sukiyaki.jpeg" />
          <FormProductDescription productDescription="説明説明説明説明説明説明" />
        </div>
        <div className={styles.buttonGroup}>
          <ButtonUtil label="登録" />
          <ButtonUtil label="キャンセル" />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
