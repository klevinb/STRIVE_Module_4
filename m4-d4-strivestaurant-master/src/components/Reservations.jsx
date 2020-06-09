import React from "react";
import { Spinner, ListGroup, Alert, Col, Row, Container } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import ReservationForm from './ReservationForm'

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      isLoading: true,
      errMess: ""
    };
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool.herokuapp.com/api/reservation"
      );
      let reservations = await response.json();
      this.setState({
        reservations,
        isLoading: false,
      })
    } catch (err) {
      this.setState({
        isLoading: false,
        errMess: err.message,
      });
    }
  };

  render() {
    console.log("Reservation props", this.props)
    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h3 className="mt-5 mb-3">RESERVATIONS</h3>
              {this.state.isLoading && (
                <div className="d-flex justify-content-center mb-5">
                  Fetching reservations...
                  <div>
                    <Spinner color="success" />
                  </div>
                </div>
              )}
              {!this.state.isLoading && !this.state.errMess && (
                <div className="mb-5">
                  {this.state.reservations.length > 0 &&
                    this.state.reservations.map((reservation, index) => (
                      <ListGroup key={index}>
                        <ListGroup.Item>
                          From: {reservation.name}, for {reservation.numberOfPersons}{" "}
                    at{" "}
                          {format(parseISO(reservation.dateTime), "yyyy-MM-dd | HH:mm")}
                        </ListGroup.Item>
                      </ListGroup>
                    ))}
                  {this.state.reservations.length === 0 && <div>No reservations for your restaurant</div>}
                </div>
              )}
              {this.state.errMess && <Alert variant="warning">Cannot load the reservations: {this.state.errMess}</Alert>}
            </Col>
            <Col xs={12}>
              <ReservationForm />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Reservations;
