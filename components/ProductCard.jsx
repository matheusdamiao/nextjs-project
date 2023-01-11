import React, { useState } from "react";
import styles from "../styles/ProductCard.module.css";
import ProductCardModal from "./ProductCardModal";

const ProductCard = ({ id, name, category, manufacturer, stock, price }) => {
  const [isClicked, setIsClicked] = useState(false);

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
          <button onClick={() => setIsClicked(!isClicked)}>Delete</button>
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
        />
      )}
    </>
  );
};

export default ProductCard;
