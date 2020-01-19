import React from "react";
import { Container } from "reactstrap";
import Slider from "./Slider"

class Home extends React.Component {
    state = {
        products: []
    }
    render() {
        return (
            <>
                <Slider />
                <Container>


                </Container>
            </>

        );
    }

    componentDidMount = async () => {
        let res = await fetch("https://localhost:3003/products")
        let products = await res.json()

        console.log(products)

        this.setState ({
            products: products
        })
    }
}

export default Home;