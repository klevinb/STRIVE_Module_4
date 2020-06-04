import React from 'react';
import { Card, Button, Col } from 'react-bootstrap'

function SingleBook(props) {
    return (
        <>
            <Col md={3} className="mb-3">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={props.book.img} />
                    <Card.Body>
                        <Card.Title>{props.book.title}</Card.Title>
                        <Card.Text>
                            {props.book.category}
                        </Card.Text>
                        <h3>{props.book.price} $</h3>
                        <Button variant="primary">Buy the</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>

    );

}

export default SingleBook;