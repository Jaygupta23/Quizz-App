// import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Header from "./components/Header";
// import Home from "./components/Home";
// import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReducerHooks from "./components/ReducerHooks";
// import EffectHooks from "./components/EffectHooks";
// import RefHokks from "./components/RefHokks";
import ImperativeHandle from "./components/ImperativeHandle";
function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchapi = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     setData(data);
  //   };
  //   fetchapi();
  // }, []);
  return (
    <Router>
      <Header  />
      <Routes>
      {/* <Route exact path="/" element={<Home data={data} />} /> */}
      {/* <Route exact path="/cart" element={<Cart />} /> */}
      {/* < Route path="/" element={<ReducerHooks />} /> */}
      {/* < Route path="/" element={<EffectHooks />} /> */}
      {/* < Route path="/" element={<RefHokks />} /> */}
      <Route path="/" element={<ImperativeHandle />} />
      </Routes>
    </Router>
  );
}

export default App;
