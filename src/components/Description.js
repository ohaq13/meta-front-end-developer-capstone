import { Heading, Avatar, VStack, Image, Box, HStack } from "@chakra-ui/react";
import Card from './Card';
import FullScreenSection from './FullScreenSection';



export default function Description() {
    return (
        <FullScreenSection
            backgroundColor="white"
            isDarkBackground
            p={8}
            alignItems="flex-start"
            spacing={8}
            w="100%"
            mb={10}
        >
            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fit,minmax(200px,1fr))"
                gridGap={8}
                w="100%"
                mt={5}
            >
                  <Box
                gridGap={8}
                w="100%"
            >
                
                    
                <Heading as="h1" >        Little Lemon Chicago      </Heading>
                <p >Little Lemon opened in 1995 by two Italian brothers,
                    Adrian and Mario. Despite the city's diversity, the two brothers recognized the
                    lack of Mediterranean cuisine in Chicago, and were inspired to bring the
                    flavors of their hometown in Italy to the people of Chicago. The two brothers
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                </Box>
                <section class="double-image">
                    <img class="about-1" src="../images/greek-salad.png" alt="Little Lemon " />
                        <img class="about-2" src="../images/bruchetta.jpg" alt="Little Lemon " />

                        </section>
                
            </Box>
          
                </FullScreenSection>


                )
  }




