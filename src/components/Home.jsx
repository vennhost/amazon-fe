import React from "react";
import { Container, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col } from "reactstrap";
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
                <Row>
                {this.state.products && this.state.products.map((product, index) =>
                    <Col md="4">
                <Card>
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardSubtitle>{product.brand}</CardSubtitle>
                  </CardBody>
                  <img width="100%" src={product.imageurl} alt="Product Image" />
                  <CardBody>
                    <CardText>{product.decription}</CardText>
                    <CardLink href="#">{product.category}</CardLink>
                    <CardLink href="#">${product.price}</CardLink>
                  </CardBody>
                </Card>
                </Col>
                )}
              </Row>
           

                </Container>
            </>

        );
    }

    componentDidMount = async () => {
        let res = await fetch("http://localhost:3003/products")
        let products = await res.json()

        console.log(products)

        this.setState ({
            products: products
        })
    }
}

export default Home;