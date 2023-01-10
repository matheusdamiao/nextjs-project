import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import https from "https";
import { getAllProducts } from "../lib/products";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const products = await getAllProducts();
  return {
    props: { products },
  };
};

export default function Home({ products }) {
  // const [allProducts, setAllProducts] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch("http://localhost:5077/product/all");
  //   const data = await res.json();
  //   setAllProducts(data);
  // };

  return (
    <>
      <Head>
        <title> Products </title>
      </Head>

      <h1> All products </h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <li>{product.name}</li>
            <li>{product.category}</li>
            <li>{product.price}</li>
          </div>
        );
      })}
    </>
  );
}
