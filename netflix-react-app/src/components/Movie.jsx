import React from 'react';
import { Col, Image } from 'react-bootstrap'

function Movie(props) {
    return (
        <Col>
            {props.src ?
                <Image fluid src={props.src} />
                :
                <Image fluid src="/images/image1.jpg" />
            }

        </Col>
    );
}

export default Movie;