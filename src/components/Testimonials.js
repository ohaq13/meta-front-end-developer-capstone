import { Heading,  Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import '../home.css';
import Card from './Card';
import FullScreenSection from './FullScreenSection';

const testimonials = [
  {
    title: "Person1",
    price: null,
    rating:5,
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/r1.png"),
  },
  {
    title: "Person2",
    price: null,
    rating:2,
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/r2.png"),
  },
  {
    title: "Person3",
    price: null,
    rating:1,
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/r3.png"),
  },
  {
    title: "Person4",
    price: null,
    rating:3,
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/r4.png"),
  },
];

export default function Specials() {

    return (
        <FullScreenSection
      backgroundColor="#495E58"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      w="100%"
    >
      <Box
        w="100%"
        mt={5}
      >
        <Heading as="h1" id="projects-section" color="white">        Testimonials      </Heading>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(200px,1fr))"
        gridGap={8}
        w="100%"
      >
        {testimonials.map((t) => (
          <Card
            key={t.title}
            title={t.title}
            price={t.price}
            description={t.description}
            imageSrc={t.getImageSrc()}
            bgColor={"white"}
            rating={t.rating}
          />
        ))}
      </Box>
      </FullScreenSection>
    )
  }
  



