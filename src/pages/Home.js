import { Heading, Avatar, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import '../home.css';
import Hero from '../components/Hero';
import Description from '../components/Description';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';

export default function Home() {
    return (
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <Description />
      </main>
    )
  }
  



