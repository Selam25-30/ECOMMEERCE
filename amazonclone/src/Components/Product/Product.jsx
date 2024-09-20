import React , { useEffect, useState } from 'react'

import axios from 'axios';
// import ProductCard from './ProductCard';
import classes from './Product.module.css'
import ProductCard from './ProductCard';

function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get ("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res);
      setProduct(res.data)
      
    }).catch((err) => {
      console.log(err);
      
    })
  
   
  }, [])
  return (
    <section className={`${classes.products__container}`}>
    {product.map((singleProduct, index) => (
            <ProductCard product= {singleProduct} key={singleProduct.id}/>


        ))
    }


</section>
  )
}

export default Product
