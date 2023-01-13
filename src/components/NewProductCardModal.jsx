import React, { useEffect, useState } from "react";
import { createProduct } from "../lib/productServices";
import styles from "../styles/NewProductCardModal.module.css";

const NewProductCardModal = ({
  isClicked,
  setIsClicked,
  setNeedRefresh,
  needRefresh,
}) => {
  const [productValue, setProductValue] = useState({
    id: "",
    name: "",
    category: "",
    manufacturer: "",
    stock: "",
    price: "",
  });

  const [isUpdated, setIsUpdated] = useState("no");

  const handleSubmit = (e) => {
    e.preventDefault();
    newProduct();
  };

  const newProduct = async () => {
    const res = await createProduct(productValue);
    console.log(res);
    if (res.statusCode === 201) {
      setIsUpdated("yes");
      setNeedRefresh(!needRefresh);
    } else {
      setIsUpdated("no");
    }
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
          type="button"
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
            required
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
            required
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
            required
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
            required
            type="text"
            name="price"
            value={productValue.price}
            onChange={updateInput}
          />
          <span></span>
        </div>

        {isUpdated === "no" && (
          <button className={styles.createBtn} type="submit">
            Create New Product
          </button>
        )}

        {isUpdated === "yes" && (
          <button
            type="button"
            style={{ backgroundColor: "green" }}
            className={styles.createBtn}
            disabled
          >
            Product created!
          </button>
        )}
      </form>
    </div>
  );
};

export default NewProductCardModal;
