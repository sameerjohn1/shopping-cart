import React from "react";
// import Cart from './cart';

// var btn=document.getElementById("btn");
// // console.log(btn,"hii");
const handlebtn = (item, i) => {
  console.log(item, i);
};

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;

  return (
    <div>
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>{price}</p>
          <button
            onDoubleClick={() => {
              handlebtn(item);
            }}
            style={{ marginTop: "10px" }}
            onClick={() => {
              handleClick(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
