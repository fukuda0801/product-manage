import React from 'react';
import styles from './edit.module.css';
import FormTitle from '../../../components/form/FormTitle';
import FormProductId from '../../../components/form/FormProductId';
import FormProductName from '../../../components/form/FormProductName';
import FormProductValue from '../../../components/form/FormProductValue';
import FormProductDescription from '../../../components/form/FormProductDescription';
import FormProductImg from '../../../components/form/FormProductImg';
import ButtonUtil from '../../../components/utils/Button';

const ProductCreate = () => {
  return (
    <div className={styles.editFormContent}>
      <div className={styles.editForm}>
        <div className={styles.editInputGroup}>
          <FormTitle title="商品編集" />
          <hr />
          <FormProductId id={1}/>
          <FormProductName productName="商品１" />
          <FormProductValue productValue={300} />
          <FormProductImg src="/sukiyaki.jpeg" />
          <FormProductDescription productDescription="説明説明説明説明説明説明" />
        </div>
        <div className={styles.buttonGroup}>
          <ButtonUtil label="更新" />
          <ButtonUtil label="リセット" />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
