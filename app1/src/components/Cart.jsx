import React from "react";
function Cart(item) {
  const getAllData = JSON.parse(localStorage.getItem("Cart"));
//   console.log(getAllData);
  return (
    <>
      {getAllData?.map((item) => {
        return (
          <div key={item.id} className="container">
            <div className="row">
              <div className="col-8 d-flex mt-5">
              <img alt="Remy Sharp" src={item.image} style={{width: "120px", height: "120px", borderRadius:"100%", backgroundSize: "contain"}} />
              <h1 className="ms-5 align-items-center d-flex ">{item.category}</h1>
              <h3 className="align-items-center d-flex ms-5">price = {item.price}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
