import React from "react";
import { useState } from "react";
function Counter() {
  let [counter, setCounter] = useState(0);  
  const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState(true);
  const onChangeHandle = (e)=>{
    const newInputValue = e.target.value;
    setInputValue(newInputValue)
  }
  return (
    <div>
      <div>
        <h1 className="ms-5">{counter}</h1>
        <button
          className="btn btn-small bg-success text-light mb-5 ms-5"
          onClick={() => setCounter(counter+1)}
        >
          Increment
        </button>
        <button 
          className="btn btn-small bg-success text-light mb-5 ms-5"
          onClick={() => {
            setCounter(counter+1);
            setTextValue(!textValue)
          }}
        >
          Click Here
        </button>
        <button disabled={counter == 0}
          className="btn btn-small bg-success text-light mb-5 ms-5" 
          onClick={() => setCounter(counter-1)}
        >
          Decrememt
        </button>
      </div>
      <div className="input mx-5 my-3 d-flex">
        <input type="text" placeholder= "Type Here" onChange={onChangeHandle} />
        <h1 className="mx-3">{inputValue}</h1>
        {textValue && <p>Here is the Text </p>}
      </div>
    </div>
  );
}

export default Counter;
