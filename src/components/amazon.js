import React, { useState } from "react";
import list from "../data";
import Cards from "./cards";
import "../styles/amazon.css";
// import Cart from './cart';

const Amazon = ({ handleClick }) => {
  const [cart, setCart] = useState([]);
  //   console.log(item);

  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};
export default Amazon;
