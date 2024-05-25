import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import ListForUseMemo from "./ListForUseMemo";

const UseMemo = () => {
  const [posts, setPost] = useState([]);
  const [count, setCount] = useState(0);
  const url = "https://jsonplaceholder.typicode.com/users";
    /*
    * useCallback
    const cachedFn = useCallback(fn, dependencies)
    useCallback(fn, dependencies)
    * Usage
    Skipping re-rendering of components 
    Updating state from a memoized callback
    Preventing an Effect from firing too often
    Optimizing a custom Hook
    ------------------------------
    The React useCallback Hook returns a memoized callback function. 
    Think of memoization as caching a value so that it does not need to be recalculated.
    */
  const deleteFunction = useCallback(
    (id) => {
      setPost(
        posts.filter((item) => {
          return item.id !== id;
        })
      );
    },
    [posts]
  );

  const fetchData = async () => {
    const fetchingData = await fetch(url);
    const responce = await fetchingData.json();
    setPost(responce);
  };
  // console.log(posts);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="useMemo min-vh-100 bg-danger-subtle ">
      <div className="useMemo-counter text-center">
        <h1 className="fs-2 text-danger">Memo and useCallback</h1>
        <h3>{count}</h3>
        <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
          counter
        </button>
      </div>
      <ListForUseMemo posts={posts} deleteFunction={deleteFunction} />
    </div>
  );
};

export default UseMemo;
