import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { addTodo } from "../store/TodoSlice";
import { useDispatch } from "react-redux";

const AddTodo = ({ input, setInput }) => {
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="container mt-5 text-light">
        <h1 className="my-4 text-center">Todo App 👌</h1>
        <div>
          <form onSubmit={addTodoHandler}>
            <div className=" d-flex" style={{ position: "relative" }}>
              <input
                type="text"
                className="form-control fs-3"
                placeholder="✍️ Add Items..."
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" disabled={input ? false : true}>
                <MdOutlineAdd
                  className="fs-1 text-success"
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "10px",
                    background: "#fff",
                  }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
