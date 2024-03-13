import React, { useState } from "react";

const Singup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-sm-6 offset-sm-3 ">
            <h1>Sign up</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="UserName"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="UserName"
            />
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="UserName"
            />
            <br/>
            <button className="btn btn-lg bg-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
