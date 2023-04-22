import { Heading,  Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import '../home.css';
import Card from './Card';
import FullScreenSection from './FullScreenSection';

const specials = [
  {
    title: "Bruchetta 1",
    price: "$9.99",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/bruchetta.jpg"),
  },
  {
    title: "Greek Salad 1",
    price: "$10.99",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/greek-salad.png"),
  },
  {
    title: "Bruchetta 2",
    price: "$11.99",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/bruchetta.jpg"),
  },
  {
    title: "Greek Salad 2",
    price: "$12.99",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/greek-salad.png"),
  },
];

export default function Specials() {

    return (
        <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      w="100%"
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        w="100%"
        mt={5}
      >
        <Heading as="h1" id="projects-section">        Specials      </Heading>
        <Box ml="auto"><Link to="/orderonline"   ><button className="btn">  Online Menu                </button></Link></Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(200px,1fr))"
        gridGap={8}
        w="100%"
      >
        {specials.map((special) => (
          <Card
            key={special.title}
            title={special.title}
            price={special.price}
            description={special.description}
            imageSrc={special.getImageSrc()}
            bgColor={"#d3d3d33d"}
            rating={0}
          />
        ))}
      </Box>
      </FullScreenSection>
    )
  }
  




  