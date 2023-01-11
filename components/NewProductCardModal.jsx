import React, { useState } from "react";
import { createProduct } from "../lib/products";
import styles from "../styles/NewProductCardModal.module.css";

const NewProductCardModal = ({ isClicked, setIsClicked }) => {
  const [productValue, setProductValue] = useState({
    id: "",
    name: "",
    category: "",
    manufacturer: "",
    stock: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(productValue);
  };

  const updateInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductValue({
      ...productValue,
      [name]: value,
    });
  };

  return (
    <div className={styles.modalBackground}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <h2>New Product</h2>
        <button
          className={styles.closeBtn}
          onClick={() => setIsClicked(!isClicked)}
        >
          X
        </button>

        <div className={styles.inputWrapper}>
          <label>ID: </label>
          <input
            required
            type="text"
            name="id"
            value={productValue.id}
            onChange={updateInput}
          />
          <span></span>
        </div>

        <div className={styles.inputWrapper}>
          <label>Name: </label>

          <input
            required
            type="text"
            name="name"
            value={productValue.name}
            onChange={updateInput}
          />
          <span></span>
        </div>

        <div className={styles.inputWrapper}>
          <label>Category: </label>
          <input
            type="text"
            name="category"
            value={productValue.category}
            onChange={updateInput}
          />
          <span></span>
        </div>

        <div className={styles.inputWrapper}>
          <label>Manufacturer: </label>
          <input
            type="text"
            name="manufacturer"
            value={productValue.manufacturer}
            onChange={updateInput}
          />
          <span></span>
        </div>

        <div className={styles.inputWrapper}>
          <label>Stock: </label>
          <input
            type="text"
            name="stock"
            value={productValue.stock}
            onChange={updateInput}
          />
          <span></span>
        </div>

        <div className={styles.inputWrapper}>
          <label>Price: </label>
          <input
            type="text"
            name="price"
            value={productValue.price}
            onChange={updateInput}
          />
          <span></span>
        </div>

        <button className={styles.createBtn} type="submit">
          Create New Product{" "}
        </button>
      </form>
    </div>
  );
};

export default NewProductCardModal;
