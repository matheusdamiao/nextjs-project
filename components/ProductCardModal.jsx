import React, { useState } from "react";
import styles from "../styles/ProductCardModal.module.css";
import { updateProduct } from "../lib/products";

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
  const [values, setValues] = useState({
    id: id,
    name: name,
    category: category,
    manufacturer: manufacturer,
    stock: stock,
    price: price,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProduct(values, id);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className={styles.modalBackground}>
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <button
          className={styles.closeBtn}
          onClick={() => setIsClicked(!isClicked)}
        >
          X
        </button>

        <div className={styles.inputWrapper}>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={values.id}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={values.category}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Manufacturer:</label>
          <input
            type="text"
            name="manufacturer"
            value={values.manufacturer}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Stock:</label>
          <input
            type="text"
            name="stock"
            value={values.stock}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={values.price}
            onChange={handleInput}
          />
        </div>

        <button className={styles.updateBtn} type="submit">
          {" "}
          Update Product
        </button>
      </form>
    </div>
  );
};

export default ProductCardModal;
