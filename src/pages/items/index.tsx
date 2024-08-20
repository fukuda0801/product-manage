import React from 'react'
import styles from "./index.module.css"
// まずはベタうち
const AllItems = () => {
  return (
    <div className={styles.allProductContent}>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th colSpan={3}>商品一覧</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ID</th>
            <th>商品名</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>679f</td>
            <td>商品１</td>
            <td>
              <div>
                <button>編集</button>
                <button>操作</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>fcda</td>
            <td>商品２</td>
            <td>
              <div>
                <button>編集</button>
                <button>操作</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AllItems
