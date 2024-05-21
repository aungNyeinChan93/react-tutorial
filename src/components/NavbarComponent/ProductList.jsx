import React, {  useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
// import myproductData from "../../Context/productContext";

const ProductList = () => {
  const { productID } = useParams();
  const [products,setproducts ]= useState([]);

  const dataFetching = async()=>{
    const fetchdata = await fetch("https://fakestoreapi.com/products");
    const res = await fetchdata.json();
    setproducts(res)
  };

  useEffect(()=>{
    dataFetching()
  },[])
  
  const product = products.filter((product) => product.id == productID );
  console.log(product);
  

  return (
    <div className="ProductList container-fluid min-vh-100 bg-dark-subtle">
      <div className="product-detail text-center">
        <h1 className="ProductList-title text-center text-decoration-underline">ProductList Page </h1>
        <h4 className="ProductList-title">ProductID : {product.map(item=>item.id)} </h4>
        <h6 className=" text-capitalize text-danger">{product.map(item=>item.title)}</h6>
        <h5 className="text-uppercase text-info bg-danger d-inline-block rounded-pill p-3 my-2">{product.map(item=>item.category)}</h5>
        <img src={product.map(item=>item.image)} alt=""  className=" d-block mx-auto p-3 img-thumbnail rounded shadow-sm w-25"/>
        <h5>{product.map(item=>item.prices)}</h5>
        <p className="text-muted fw-lighter fst-italic my-3 py-2">{product.map(item=>item.description)}</p>
        <button className="btn btn-danger mx-2 my-2 ">
          <Link to={"/product"} className=" text-decoration-none text-white">Go To Product List</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
