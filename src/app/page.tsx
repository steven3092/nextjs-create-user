"use client";
import { use, useEffect, useState } from "react";
import { fetchData } from "./api-requests";

type productsType = {
  products: [{ Name: string; Price: string; Location: string }];
};

export default function Home() {
  // Trigger fetch data with react 19, with use only.
  const products = use<productsType>(fetchData());

  // Trigger fetch data with react before react 19, with useEffect and useState.
  // const [products, setProducts] = useState<productsType>();
  // useEffect(() => {
  //   fetchData().then((data) => setProducts(data));
  // }, []);

  return (
    <>
      <div>{products?.products.map((el) => el.Name)}</div>
    </>
  );
}
