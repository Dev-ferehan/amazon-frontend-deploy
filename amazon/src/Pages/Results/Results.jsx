import React, { useEffect } from "react";
import { useState } from "react";

import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endpoint";
import Catagory from "../../Components/CATAGORY/Catagory";
import classes from "./results.module.css";
import ProductCard from "../../Components/PRODUCT/ProductCard";
import Loading from "../../Components/Loading/Loading";
function Results() {
  const [results, setResults] = useState([]);
const [IsLoading,setIsLoading]=useState(false)
  const { catagoryName } = useParams();
  console.log(catagoryName);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(results);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("rrrrrrrrr", err);
        setIsLoading(false)

      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Catagory/ {catagoryName}</p>
        <hr />
        {
          IsLoading?(<Loading/>):(<div className={classes.products_container}>
            {results?.map((product) => (
    
      <ProductCard key={product.id}  product={product} renderDesc={true} addButton={true}/>
            ))}
          </div>)
        }
   
      </section>
    </Layout>
  );
}

export default Results;
