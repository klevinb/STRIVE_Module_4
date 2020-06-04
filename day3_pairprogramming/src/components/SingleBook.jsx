import React from 'react';
import { Card, Button } from 'react-bootstrap'

function SingleBook(props) {
    return (
        <div>
            {props.book.slice(0, 1).map((book) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                {book.category}
                            </Card.Text>
                            <h3>{book.price} $</h3>
                            <Button variant="primary">Buy the book</Button>
                        </Card.Body>
                    </Card>
                )
            })

            }

        </div>
    );
}

export default SingleBook;