import React, { Component } from 'react';
import Navbar from './Navbar'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Register extends Component {

    state = {
        show: false,
        person: {
            name: '',
            surname: '',
            email: '',
            password: '',
            birthDay: new Date(),
            streetAddress: '',
            city: '',
            postalCode: '',
        }
    }

    componentDidUpdate = () => {
        if (
            this.state.person.name.length > 2 &&
            this.state.person.surname.length > 3 &&
            this.state.person.email.indexOf("@") !== -1 &&
            this.state.person.password.length >= 8 &&
            this.state.person.birthDay.getFullYear() > 1910 &&
            this.state.person.postalCode.length > 5
        ) {
            this.setState({
                show: !this.state.show
            });
        }
    }

    updatePerson = (event) => {
        let person = this.state.person
        person[event.currentTarget.id] = event.currentTarget.value

        this.setState({
            person
        });
    }

    render() {
        return (
            <div>
                <Navbar props={this.props} register={true} />
                <Container>
                    <Row className="d-flex justfify-content-center">
                        <Col md={6} className="offset-3">
                            <h1 className="text-center">Register</h1>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="name"
                                                placeholder="Name"
                                                value={this.state.person.name}
                                                onChange={this.updatePerson}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Surname</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="surname"
                                                placeholder="Surname"
                                                value={this.state.person.surname}
                                                onChange={this.updatePerson}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                placeholder="Email"
                                                value={this.state.person.email}
                                                onChange={this.updatePerson}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                id="password"
                                                placeholder="Password"
                                                value={this.state.person.password}
                                                onChange={this.updatePerson}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    <Form.Label>Birth Day</Form.Label>
                                    <Form.Control
                                        type="date"
                                        id="birthDay"
                                        value={this.state.person.birthDay}
                                        onChange={this.updatePerson}
                                        required
                                    />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Street Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="streetAddress"
                                                placeholder="Street Address"
                                                value={this.state.person.streetAddress}
                                                onChange={this.updatePerson}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="city"
                                                placeholder="City"
                                                value={this.state.person.city}
                                                onChange={this.updatePerson}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Postal Code</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="postalCode"
                                                placeholder="Postal Code"
                                                value={this.state.person.postalCode}
                                                onChange={this.updatePerson}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {this.state.show &&
                                    <Button className="offset-5" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                }
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;