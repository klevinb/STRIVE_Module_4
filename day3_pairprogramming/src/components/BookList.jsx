import React from 'react';
import SingleBook from './SingleBook';
import { Row } from 'react-bootstrap';

function BookList(props) {
    return (
        <div>
            <Row className="row-cols-1 row-cols-md-6">
                {props.book.map(ListBook => <SingleBook book={ListBook} />)}

            </Row>

        </div>
    );
}

export default BookList;