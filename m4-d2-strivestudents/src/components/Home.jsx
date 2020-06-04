import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import items from '../menu.json'
import Dishcomments from './DishComments'

class Home extends Component {
    render(){

        console.log(this.props)
        return (
            <>
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col>
                        <h1>Welcome to Strivesturant !</h1>
                        <p className="lead">The best page for all gratuated students!</p>
                        <hr className=""></hr>
                        <Carousel>
                            {items.map((item) => {
                                return (
                                    <Carousel.Item key={item.id}>
                                    <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt={item.name}
                                    />
                                    <Carousel.Caption>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Home