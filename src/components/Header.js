import Nav from "./Nav"
import { Link } from "react-router-dom"
export default function Header() {

    return (
        <header>
            <meta charset="UTF-9" />
            <meta name="description" content="Little lemon is a fine dine restaurant with great food and online seat reservation convinience" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="og:title" content="Little lemon" />
            <meta name="og:description" content="Little lemon is a fine dine restaurant with great food and online seat reservation convinience" />
            <meta name="og:image" content="../images/footer" />
            {/*<Link to="/"><img src="/images/logo.png" alt="little lemon"/></Link>*/}
            <Nav />
        </header>
    )
}