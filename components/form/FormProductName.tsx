import styles from "./FormProductName.module.css"
import React from 'react'

type FormProductNameProps = {
  productName: string;
}

const FormProductName = ({productName}: FormProductNameProps) => {
  return (
    <div>
      <label htmlFor="productName">商品名</label>
      <input type="text" id="productName" name="productName" value={productName} className={styles.formName} />
    </div>
  )
}

export default FormProductName
