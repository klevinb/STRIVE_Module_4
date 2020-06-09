import React from "react";
import { Row, Col, Button, Form, Spinner, Alert } from "react-bootstrap";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation: {
        name: "",
        phone: "",
        numberOfPersons: 1,
        smoking: false,
        dateTime: "",
        specialRequests: ""
      },
      isLoading: false,
      errMess: ""
    };
  }

  submitReservation = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    try {
      let response = await fetch("https://striveschool.herokuapp.com/api/reservation", {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        alert('Reservation saved!');
        this.setState({
          isLoading: false,
          errMess: "",
          reservation: {
            name: "",
            phone: "",
            numberOfPersons: 1,
            smoking: false,
            dateTime: "",
            specialRequests: ""
          }
        });
      } else {
        let json = await response.json();
        this.setState({
          errMess: json.message,
          isLoading: false
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        errMess: err.message,
        isLoading: false
      });
    }
  };

  updateReservationField = input => {
    let reservation = this.state.reservation;
    let currentId = input.currentTarget.id;

    switch (currentId) {
      case "smoking":
        reservation[currentId] = input.currentTarget.checked;
        break;
      default:
        reservation[currentId] = input.currentTarget.value;
    }

    this.setState({ reservation: reservation });
  };

  render() {
    return (
      <div className="mb-3">
        {this.state.errMess.length > 0 && (
          <Alert variant="danger">
            We encountered a problem while processing your request:{" "}
            {this.state.errMess}
          </Alert>
        )}
        <h3>Reserve your table now!</h3>
        {
          this.state.isLoading && (
            <div className="d-flex justify-content-center my-5">
              Reserving your table, please wait
              <div className="ml-2">
                <Spinner animation="border" variant="success" />
              </div>
            </div>
          )
        }
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
    );
  }
}

export default ReservationForm;
