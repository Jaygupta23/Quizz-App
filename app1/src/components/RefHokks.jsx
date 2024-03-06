import React, { useRef } from "react";

function RefHokks() {
  const inputref = useRef(null);
  const onClick = () => {
    console.log(inputref.current);
    inputref.current.focus();
    inputref.current.value = "";
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Jay</h1>
          <input
            type="text"
            placeholder="Ex...."
            className="form-control"
            ref={inputref}
          />
          <button onClick={onClick} className="form-control">
            Change Name{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RefHokks;
