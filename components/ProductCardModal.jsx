import React, { useState } from "react";
import styles from "../styles/ProductCardModal.module.css";

const ProductCardModal = ({
  id,
  name,
  category,
  manufacturer,
  stock,
  price,
  key,
  isClicked,
  setIsClicked,
}) => {
  const [values, setValues] = useState({ id: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.modalBackground}>
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <input type="text" value={id || ""} onChange={(e) => e.target.value} />
        <input type="text" value={name} />
        <input type="text" value={category} />
        <input value={manufacturer} />
        <input value={stock} />
        <input value={price} />
        <button onClick={() => setIsClicked(!isClicked)}>X</button>
        <button type="submit"> Update Product</button>
      </form>
    </div>
  );
};

export default ProductCardModal;
