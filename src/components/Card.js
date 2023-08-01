import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import "../css/Card.css";
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div class="section">
      <img class="highlight"alt="Highlight" borderRadius="1vw" src={imageSrc} />
      <h3 color="black" alignSelf="flex-start" marginLeft="1vw" marginRight="1vw" fontSize="1.5vw">{title}</h3>
      <Text color="DarkSlateGrey" marginLeft="1vw" marginRight="1vw" fontSize="1vw">{description}</Text>
      <Text alignSelf="flex-start" color="black" marginLeft="1vw" marginBottom="1vw" fontSize="1vw">Order a Delivery</Text>
    </div>
  );
};

export default Card;
