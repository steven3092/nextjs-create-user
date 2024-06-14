"use client";
import { FormEvent, use, useActionState, useEffect, useState } from "react";
import { fetchData } from "./api/requests";
import { Button } from "./components/button";
import { addUser } from "./form/actions";
import { useFormState } from "react-dom";

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

  // React 18
  // const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = new FormData(event.target as HTMLFormElement);
  //   alert(`user ${form.get("firstName")} added`);
  // };

  //In Next
  const [state, submitAction, isPending] = useFormState(addUser, null);

  return (
    <>
      <div>{products?.products.map((el) => el.Name)}</div>

      {/* React 18 for submitting forms
      <form onSubmit={handleOnSubmit}> 
      */}

      <form action={submitAction}>
        <label>First name :</label>
        <input type="text" name="firstName" />
        Last Name :
        <input type="text" name="lastName" />
        <Button name="Submit" type="submit" />
      </form>
    </>
  );
}
