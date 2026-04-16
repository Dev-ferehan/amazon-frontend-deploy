import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endpoint";
import axios from "axios";
import ProductCard from "../../Components/PRODUCT/ProductCard";
import Loading from "../../Components/Loading/Loading";
function ProductDetal() {
  const [product, setProduct] = useState({});
  const [IsLoading,setIsLoading]=useState(false);
  const { productId } = useParams();
  
  useEffect(() => {
    // setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log("ressssssssssss",res.data);
        setProduct(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("yyyyyyyy", err);
       setIsLoading(false)

      });
  }, [productId]);

  return (
    <Layout>  
      {IsLoading?(<Loading/> ): (<ProductCard product={product} flux={true} renderDesc={true} addButton={true}/>)}
      
    </Layout>
  );
}

export default ProductDetal;
