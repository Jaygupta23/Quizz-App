import "./App.css";
// import Login from "./component/Login";
// import Profiler from "./component/Profiler";

import Singup from "./component/Singup";
import ContextApi from "./contextApi/ContextApi";

function App() {
  return (
    <ContextApi>
      <div className="d-flex justify-content-center ">
        <h1>React course hello world</h1>
        <Singup />
      </div>
    </ContextApi>
  );
}

export default App;
