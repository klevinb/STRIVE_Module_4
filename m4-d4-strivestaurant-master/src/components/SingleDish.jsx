import React from 'react';
import { Row, Col, Image, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleDish = ({ dish }) => (

    <Row>
        <Col md={8} className="ml-auto mr-auto">
            <Row>
                <Col md={4} className="ml-auto mr-auto">
                    <Link to={'details/' + dish.id}><Image src={dish.image} className="my-2 w-100 h-auto" /></Link>
                </Col>
                <Col md={8} className="mt-auto mb-auto">
                    <h4>
                        {dish.name}
                        <Badge variant="warning" className="ml-2">{dish.price}</Badge>
                        <Badge variant="danger" className="ml-2">{dish.label}</Badge>
                    </h4>
                    <p>{dish.description}</p>
                </Col>
            </Row>
        </Col>
    </Row>

)

export default SingleDish;