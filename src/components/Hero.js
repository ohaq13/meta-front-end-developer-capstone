import { Heading, Avatar } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


export default function Hero() {
    return (
        <section className="hero">
        <div className="hero-content">
            <div className="hero-desc">
            <Heading as='h1' mb={5} color="#F4CE14">Little Lemon</Heading>
            <Heading as='h2' color="white">Chicago</Heading>
                <p className="desc">We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking" ><button className="reserve-btn btn">
                    Reserve a table
                </button></Link>
            </div>
            <div className="img-wrapper">
            <Avatar boxSize='13rem' src ="../images/hero.png "></Avatar>
            </div>
        </div>
        </section>
    )
  }
  



