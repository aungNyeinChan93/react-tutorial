import React from "react";
import MyContextOne from "../Context/MyContextOne";
import MyListContext from "../Context/MyListContext";
import Form from "./Context_components/Form";
import List from "./Context_components/List";

const UseContext = () => {
  const person = {
    name: "aung",
    age: 22,
  };
  const book ={
    name:"game of throme",
    year :"2018",
    amount : 1000,
    
  }
  return (
    <div className="useContext">
      <MyContextOne.Provider value={person}>
        <Form />
        <MyListContext.Provider value={book}>
          <List />
        </MyListContext.Provider>
      </MyContextOne.Provider>
    </div>
  );
};

export default UseContext;
