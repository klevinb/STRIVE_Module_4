import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

class ReservationForm extends React.Component {

    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPersons: 1,
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    updateReservationField = event => {
        let reservation = this.state.reservation
        let currentId = event.currentTarget.id

        if (currentId === 'phone' || currentId === 'numberOfPersons') {
            reservation[currentId] = parseInt(event.currentTarget.value)
        } else if (currentId === 'smoking') {

            reservation[currentId] = event.currentTarget.checked

        } else {

            reservation[currentId] = event.currentTarget.value
        }


        this.setState({
            reservation
        });

    }

    submitReservation = async (e) => {
        e.preventDefault()

        try {
            let response = await fetch("https://striveschool.herokuapp.com/api/reservation", {
                method: "POST",
                body: JSON.stringify(this.state.reservation),
                headers: {
                    "Content-Type": 'application/json'
                }
            })

            if (response.ok) {
                alert('You got a table now! :P')

                this.setState({
                    reservation: {
                        name: '',
                        phone: '',
                        numberOfPersons: 1,
                        smoking: false,
                        dateTime: '',
                        specialRequests: ''
                    }
                });
            } else {
                let json = await response.json()
                alert(json)
            }

        } catch (err) {
            console.log(err)
        }
    }



    render() {
        return (
            <div className="mt-2">
                <Form onSubmit={this.submitReservation}>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    value={this.state.reservation.name}
                                    onChange={this.updateReservationField}
                                />
                            </Form.Group>
                        </Col>
                        <Form.Group className="col-md-6">
                            <Form.Label htmlFor="phone">Phone</Form.Label>
                            <Form.Control
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="Your phone"
                                value={this.state.reservation.phone}
                                onChange={this.updateReservationField}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label htmlFor="numberOfPersons">
                                    How many people?
              </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="numberOfPersons"
                                    id="numberOfPersons"
                                    value={this.state.reservation.numberOfPersons}
                                    onChange={this.updateReservationField}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={2} className="flex flex-column align-self-end">
                            <Form.Group>
                                <Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        id="smoking"
                                        checked={this.state.reservation.smoking}
                                        onChange={this.updateReservationField}
                                        label="Smoking?"
                                    />
                                </Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <Form.Label htmlFor="dateTime">Date and Time</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="dateTime"
                                    id="dateTime"
                                    placeholder="Date and Time"
                                    value={this.state.reservation.dateTime}
                                    onChange={this.updateReservationField}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label htmlFor="specialRequests">Special Requests</Form.Label>
                                <Form.Control
                                    type="textarea"
                                    name="text"
                                    id="specialRequests"
                                    value={this.state.reservation.specialRequests}
                                    onChange={this.updateReservationField}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ReservationForm