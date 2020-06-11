import React from 'react';
import { Row } from 'react-bootstrap'
import Movie from './Movie'
import { Col, Spinner } from 'react-bootstrap'

function Gallery(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 no-gutters text-center">
                {props.loading ?
                    [1, 2, 3, 4, 5, 6].map((num) =>
                        <Col>
                            <Spinner animation="grow" variant="light" />
                            <Spinner animation="grow" variant="light" size="sm" />
                        </Col>
                    )
                    :
                    props.movies.slice(0, 6).map((movie) =>
                        <Movie src={movie} title={movie.Title} />
                    )
                }
            </Row>
        </div>
    );
}

export default Gallery;