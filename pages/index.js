import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getAllProducts } from "../lib/products";
import { useEffect, useState } from "react";
import ProductCardModal from "../components/ProductCardModal";
import ProductCard from "../components/ProductCard";
import NewProductCardModal from "../components/NewProductCardModal";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getAllProducts();
    setAllProducts(data);
  };

  return (
    <>
      <Head>
        <title> Products </title>
      </Head>

      <div className={styles.wrapperHeading}>
        <h1 className={styles.title}> Admin Panel </h1>
        <button
          className={styles.createBtn}
          onClick={() => setIsClicked(!isClicked)}
        >
          {" "}
          Create New Product
        </button>
      </div>

      <div className={styles.wrapperContent}>
        {allProducts &&
          allProducts.map((product) => {
            return (
              <ProductCard
                id={product.id}
                name={product.name}
                category={product.category}
                manufacturer={product.manufacturer}
                stock={product.stock}
                price={product.price}
                key={product.id}
              />
            );
          })}
      </div>
      {isClicked && (
        <NewProductCardModal
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      )}
    </>
  );
}
