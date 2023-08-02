import React from "react";
import "../css/Card.css";
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div class="section">
      <img class="highlight"alt="Highlight" borderRadius="1vw" src={imageSrc} />
      <h3>{title}</h3>
      <p class="description">{description}</p>
      <p class="order">Order a Delivery</p>
    </div>
  );
};

export default Card;
