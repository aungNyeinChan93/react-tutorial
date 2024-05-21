import React, { useState, useEffect } from "react";
import { useFetchCustomeHook } from "../customeHook/FetchCustomeHook";

const CustomeHook = () => {
  // ------------------------------------------------
  // const [post, setPost] = useState([]);
  // const fetchData = async () => {
  //   const dataFetching = await fetch("https://fakestoreapi.com/users");
  //   const responceData = await dataFetching.json();
  //   setPost(responceData);
  // };
  // console.log(post);
  // useEffect(()=>{
  //   fetchData()
  // },[])
  // -------------------------------------------------
  const url = "https://fakestoreapi.com/users";
  const { loading, post } = useFetchCustomeHook(url);
  if (loading) {
    return (
      <div className="text-center min-vh-100 bg-info-subtle fs-1 text-danger ">
        {" "}
        loading .....
      </div>
    );
  }
  return (
    <div className="CustomeHook container-fluid bg-body-tertiary min-vh-100">
      <h1 className="CutomeHook-title bg-info p-2  fs-3 text-center my-2 rounded">
        Custome Hook
      </h1>
      {post.map((item) => {
        return (
          <ul className="list-group my-3 w-75 mx-auto p-5">
            <li className="list-group-item list-group-item-primary">
              {item.id}
            </li>
            <li className="list-group-item list-group-item-secondary">
              {item.username}
            </li>
            <li className="list-group-item list-group-item-info">
              {item.email}
            </li>
            <li className="list-group-item list-group-item-success">
              {item.phone}
            </li>
            <li className="list-group-item list-group-item-danger">
              {item.address.city}
            </li>
            <li className="list-group-item list-group-item-warning">
              {item.address.zipcode}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default CustomeHook;
