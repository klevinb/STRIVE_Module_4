import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

class DishComments extends Component {
    render() {
        return (
            <Container xs={6}>
                {this.props.dish && (
                    <ListGroup>
                        <h1>{this.props.dish.name}</h1>
                        {this.props.dish.comments.map((item) => {
                            return (

                                <ListGroup.Item>
                                    {item.author} : {item.comment}
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>

                )}
            </Container>
        );
    }
}

export default DishComments;