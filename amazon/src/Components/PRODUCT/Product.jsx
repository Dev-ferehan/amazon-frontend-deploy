import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import Loading from "../Loading/Loading";
const Product = () => {
  const [products, setProducts] = useState();
  const [IsLoading,setIsLoading]=useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true)
      });
  }, []);
  return (
    <>
    {IsLoading?(<Loading/>):(<section className={classes.products_container}>
      {products?.map((singleProduct) => {
        return <ProductCard product={singleProduct} addButton={true}  />;
      })}
    </section>)}
    
    </>
  );
};

export default Product;
