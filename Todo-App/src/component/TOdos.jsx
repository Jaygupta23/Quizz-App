import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../store/TodoSlice";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const TOdos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-5 container">
        <h1 className="my-4 text-center text-light">Todos✌️</h1>
        <ul className="list-group ">
          {todos.map((todo) => (
            <li
              className="list-group-item fs-3 rounded-3 d-flex mb-2 pt-2"
              key={todo.id}
            >
              {todo.text}
              <div className=" ms-auto">
                <FaTrashAlt
                  className="text-danger fs-3 "
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TOdos;
