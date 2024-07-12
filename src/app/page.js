'use client'
import { useEffect } from "react";
// import { fetchProduct } from "./store/services/productService";
import { useDispatch, useSelector } from "react-redux";
import { product } from "./store/slices/productSlice";

export default function Home() {
  const dispatch = useDispatch()
  let products = useSelector((state) => state.product)
  // console.log(products)
  useEffect(() => {
    // let product = fetchProduct()
    dispatch(product())
    console.log(products)
  }, [])
  return (
    <>
      hello
    </>
  );
}
