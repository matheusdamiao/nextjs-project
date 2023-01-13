import Head from "next/head";
import styles from "./../src/styles/Home.module.css";
import { getAllProducts } from "../src/lib/productServices";
import { useEffect, useState } from "react";
import ProductCardModal from "../src/components/ProductCardModal";
import ProductCard from "../src/components/ProductCard";
import NewProductCardModal from "../src/components/NewProductCardModal";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(false);

  useEffect(() => {
    fetchData();
  }, [needRefresh]);

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
                needRefresh={needRefresh}
                setNeedRefresh={setNeedRefresh}
              />
            );
          })}
      </div>
      {isClicked && (
        <NewProductCardModal
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          needRefresh={needRefresh}
          setNeedRefresh={setNeedRefresh}
        />
      )}
    </>
  );
}
