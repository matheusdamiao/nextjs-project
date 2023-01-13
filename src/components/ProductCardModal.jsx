import React, { useState } from "react";
import styles from "../styles/ProductCardModal.module.css";
import { updateProduct } from "../lib/productServices";

const ProductCardModal = ({
  id,
  name,
  category,
  manufacturer,
  stock,
  price,
  isClicked,
  setIsClicked,
  setNeedRefresh,
  needRefresh,
}) => {
  const [values, setValues] = useState({
    Id: id,
    name: name,
    category: category,
    manufacturer: manufacturer,
    stock: stock,
    price: price,
  });

  const [isUpdated, setIsUpdated] = useState("no");

  const handleSubmit = (e) => {
    e.preventDefault();
    update();
  };

  const update = async () => {
    const res = await updateProduct(values, id);
    console.log(res);
    if (res === 200) {
      setIsUpdated("yes");
      setNeedRefresh(!needRefresh);
    } else {
      setIsUpdated("Error");
    }
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
          type="button"
        >
          X
        </button>

        <div className={styles.inputWrapper}>
          <label>ID:</label>
          <input
            required
            type="text"
            name="Id"
            value={values.Id}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Name:</label>
          <input
            required
            type="text"
            name="name"
            value={values.name}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Category:</label>
          <input
            required
            type="text"
            name="category"
            value={values.category}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Manufacturer:</label>
          <input
            required
            type="text"
            name="manufacturer"
            value={values.manufacturer}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Stock:</label>
          <input
            required
            type="text"
            name="stock"
            value={values.stock}
            onChange={handleInput}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label>Price:</label>
          <input
            required
            type="text"
            name="price"
            value={values.price}
            onChange={handleInput}
          />
        </div>

        {isUpdated === "no" && (
          <button className={styles.updateBtn} type="submit">
            {" "}
            Update Product
          </button>
        )}

        {isUpdated === "yes" && (
          <button
            className={styles.updateBtn}
            style={{ backgroundColor: "green" }}
            type="button"
            disabled
          >
            {" "}
            Product Updated!
          </button>
        )}

        {isUpdated === "Error" && (
          <button
            className={styles.updateBtn}
            style={{ backgroundColor: "red" }}
            type="button"
            disabled
          >
            {" "}
            Ops! Something went wrong.
          </button>
        )}
      </form>
    </div>
  );
};

export default ProductCardModal;
