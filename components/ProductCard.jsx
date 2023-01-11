import React, { useState } from "react";
import styles from "../styles/ProductCard.module.css";
import ProductCardModal from "./ProductCardModal";

const ProductCard = ({ id, name, category, manufacturer, stock, price }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <p> ID:{id}</p>
        <h2> Name:{name}</h2>
        <h4> Category:{category}</h4>
        <h5>Manufacturer:{manufacturer}</h5>
        <p>Stock:{stock}</p>
        <p>Price: {price}</p>
        <button onClick={() => setIsClicked(!isClicked)}>Edit</button>
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
