import React, { Component } from 'react';
import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap'
import dishes from '../data/menu.json'
import DishComments from './DishComments'

class DishDetails extends Component {
    state = {
        dish: null,
        loading: true
    }

    componentDidMount = () => {
        const dishId = this.props.match.params.id
        console.log(dishId)
        const dish = dishes.find(dish => dish.id.toString() === dishId)

        this.setState({
            dish,
            loading: false
        });
        console.log('Dish =>', dish)
    }

    render() {
        return (
            <Container>
                {console.log("dish props ", this.state.dish)}
                <Row>
                    <Col>
                        {this.state.loading && <h1>LOADING!!!</h1>}
                        {this.state.dish &&
                            <Row className="mt-4 mb-2">
                                <Col md={3}>
                                    <Image src={'/' + this.state.dish.image} className="img-fluid" />
                                </Col>
                                <Col md={9}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{this.state.dish.title}</Card.Title>
                                            <Card.Subtitle><Badge variant="danger">{this.state.dish.label}</Badge></Card.Subtitle>
                                            <Card.Text>
                                                {this.state.dish.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        }
                    </Col>
                </Row>
                <DishComments selectedDish={this.state.dish} />
            </Container>
        );
    }
}

export default DishDetails;