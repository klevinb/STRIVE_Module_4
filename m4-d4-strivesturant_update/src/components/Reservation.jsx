import React from 'react'
import { ListGroup } from 'react-bootstrap'

class Reservations extends React.Component {

    state = {
        reservations: []
    }

    componentDidMount = async () => {
        // The perfect place to make async functions {fetch, ...}
        console.log("I am in componentDidMount!")
        try {
            let response = await fetch("https://striveschool.herokuapp.com/api/reservation")
            let reservations = await response.json()

            this.setState({
                reservations
            });

            console.log("Reservations", reservations)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className="mt-2">
                <ListGroup>
                    {this.state.reservations.length > 0 &&
                        this.state.reservations.map((reservation, i) => {
                            return (
                                <ListGroup.Item key={`item-${i}`}>
                                    From: {reservation.name}, for {reservation.numberOfPersons}
                                at {reservation.dateTime}
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>

                {this.state.reservations.length === 0 && (<div>No reservations yet!</div>)}
            </div>
        )
    }
}

export default Reservations