import React, { Component } from 'react';
import Navbar from './MyNavbar'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'

class Register extends Component {

    state = {
        showUser: false,
        show: false,
        person: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    componentDidUpdate = () => {
        if (
            this.state.show === false &&
            this.state.person.name.length > 2 &&
            this.state.person.surname.length > 3 &&
            this.state.person.email.includes("@") &&
            this.state.person.password.length >= 8 &&
            this.state.person.confirmPassword === this.state.person.password
        ) {
            this.setState({
                show: !this.state.show
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            showUser: !this.state.showUser
        });
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
                            <Form onSubmit={this.handleSubmit}>
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
                                </Row>
                                <Row>
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
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Comfirm Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                id="confirmPassword"
                                                placeholder="Confirm Password"
                                                value={this.state.person.confirmPassword}
                                                onChange={this.updatePerson}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {this.state.show &&
                                    <Button className="offset-5" variant="primary" type="submit">
                                        Register
                                    </Button>
                                }
                            </Form>
                        </Col>
                    </Row>
                    {this.state.showUser ?
                        <>
                            <Row className="d-flex justfify-content-center mt-3">
                                <Col>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Surname</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{this.state.person.name}</td>
                                                <td>{this.state.person.surname}</td>
                                                <td>{this.state.person.email}</td>
                                                <td>{this.state.person.password}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </>
                        :
                        <Row className="d-flex justfify-content-center">
                            <Col className="text-center" >
                                <p>No users to display</p>
                            </Col>
                        </Row>
                    }
                </Container>
            </div >
        );
    }
}

export default Register;