import { Heading, HStack, Image, Text, VStack, Box, Avatar } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faStar,faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons';

import React from "react";

const Card = ({ title, price, description, imageSrc, bgColor, rating}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  var stars = [];
  for (var i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon color ="#f4ce14" icon={faStar} size="xs" />);
  }

  return (
    <HStack 
    backgroundColor={bgColor} 
    borderRadius="13px"
    color="black"
    >
      <VStack >
      {price != null?
      <Image borderRadius="13px" src={imageSrc}></Image>:
      <Avatar boxSize='8rem' src={imageSrc}></Avatar>}
        <VStack p={5} align="start">
        <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        w="100%"
        alignItems="center"
      >
          <Heading size='1xl'>{title}</Heading>
          {price == null?<span>{stars}</span>:""}

          <Box ml="auto" backgroundColor={"#F4CE14"}><Heading size='1xl'>{price}</Heading></Box>
          </Box>
            
          <Text fontSize='1rem' color="darkgrey">{description}</Text>
          {price != null?
          <HStack>
            <Text fontSize='0.8rem' >Order a delivery</Text>
            <FontAwesomeIcon color ="black" icon={faArrowRight} size="1x" />
          </HStack>:""}
        </VStack>
      </VStack>
    </HStack>
    
  );
};

export default Card;
