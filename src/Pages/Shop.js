import React from "react";
import { useNavigate } from "react-router-dom";

function Shop() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>THIS IS THE SHOP PAGE</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back Home
      </button>
    </div>
  );
}

export default Shop;
