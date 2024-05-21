import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import myproductData from "../../Context/productContext";

const Product = () => {
  const { productData, setProductData } = useContext(myproductData);
  const dataFetching2 = async () => {
    const fetchData2 = await fetch("https://fakestoreapi.com/products");
    const responceData2 = await fetchData2.json();
    // console.log(responceData);
    setProductData(responceData2);
  };
  console.log(productData);

  useEffect(() => {
    dataFetching2();
  }, []);
  return (
    <div className="Product container-fluid min-vh-100 bg-dark-subtle">
      <h1 className="Product-title text-center">Product Page</h1>
      <ul className=" list-unstyled">
        {productData.map((product, index) => {
          return (
            <li key={product.id}>
              <span className="fs-3 me-5 ms-2">{product.id}</span>
              {product.title}
              <Link to={`/product/${product.id}`} className="ms-3 text-danger">
                More Info
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Product;
