import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'

function SingleBook(props) {
    return (
        <>
            <Col className="col-6 col-md-3 col-lg-2 mb-3">
                <Card style={{ width: '10rem' }}>
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