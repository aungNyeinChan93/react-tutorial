import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState, useReducer } from "react";

const intialValue = {
  user: [],
};

function reducer(state, action) {
  if (action.type === "ADD_INPUT") {
    const newUser = [...state.user, action.payload];
    return { ...state, user: newUser };
  }
}

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, intialValue);
  function formHundler(e) {
    e.preventDefault();
    // console.log(inputValue);
    const newInput = {
      inputName: inputValue,
      id: Math.random().toString(),
    };
    dispatch({ type: "ADD_INPUT", payload: { newInput } });
    setInputValue("");
 
   
}
  //   console.log(state);

  return (
    <div className="TodoList min-vh-100 bg-body-tertiary container-fluid ">
      <h1 className="todolist-title text-center p-2 rounded bg-danger text-white text-capatalize fs-3">
        Todo List with usereducer
      </h1>
      <div className="form-container">
        <form action="#" className="container-lg" onSubmit={formHundler}>
          <div className="form-group d-flex justify-content-center align-items-center mt-3">
            <input
              className="form-control form-control-lg my-2 w-75"
              type="text"
              placeholder="Enter your List"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button
              className="btn btn-outline-danger px-3 my-2 mx-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <ul className="list-group container-sm ">
          {state.user.map((item) => {
            return (
              <li
                className="list-group-item p-2 list-group-item-info "
                key={item.newInput.id}
              >
                <div className=" position-relative">
                    <i className="fa-solid fa-star ms-1 text-danger"/>
                    <span className="ms-4">{item.newInput.inputName} </span>
                    {/* <i className="fa-solid fa-delete-left  position-absolute end-0 me-3 pt-1 "/> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
