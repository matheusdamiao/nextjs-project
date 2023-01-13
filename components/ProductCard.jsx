import React, { useState } from "react";
import { deleteProduct } from "../lib/products";
import styles from "../styles/ProductCard.module.css";
import ProductCardModal from "./ProductCardModal";

const ProductCard = ({
  id,
  name,
  category,
  manufacturer,
  stock,
  price,
  setNeedRefresh,
  needRefresh,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDelete = async (e) => {
    await deleteProduct(Number(id));
    setNeedRefresh(true);
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapperText}>
          <label></label>
          <h2> Name:{name}</h2>
          <h4> Category:{category}</h4>
          <h4>Manufacturer:{manufacturer}</h4>
        </div>

        <div className={styles.wrapperNumbers}>
          <p> ID:{id}</p>
          <p>Stock:{stock}</p>
          <p>Price: {price}</p>
        </div>

        <div className={styles.btns}>
          <button onClick={() => setIsClicked(!isClicked)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {isClicked && (
        <ProductCardModal
          id={id}
          name={name}
          category={category}
          manufacturer={manufacturer}
          stock={stock}
          price={price}
          key={id}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          setNeedRefresh={setNeedRefresh}
          needRefresh={needRefresh}
        />
      )}
    </>
  );
};

export default ProductCard;
