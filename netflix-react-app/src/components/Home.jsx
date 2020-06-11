import React, { Component } from 'react';
import { Container, Row, Col, Dropdown, Spinner, Alert } from 'react-bootstrap'
import Gallery from './Gallery'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transformers: [],
            deadpool: [],
            spiderman: [],
            err: false,
            loading: true,
        };
    }
    url = "http://www.omdbapi.com/?apikey=71eeae0a";
    componentDidMount = () => {
        Promise.all(
            [
                fetch(this.url + "&s=transformers")
                    .then((response) => response.json())
                    .then(responseObject => this.setState({
                        transformers: responseObject.Search,
                    })
                    ),
                fetch(this.url + "&s=deadpool")
                    .then((response) => response.json())
                    .then(responseObject => this.setState({
                        deadpool: responseObject.Search,
                    })
                    ),
                fetch(this.url + "&s=spider%20man")
                    .then((response) => response.json())
                    .then(responseObject => this.setState({
                        spiderman: responseObject.Search,
                    })
                    ),
            ]
        )
            .then(() => this.setState({
                loading: !this.state.loading
            }))
            .catch(err => {
                this.setState({
                    err: true,
                })
                console.log("An error has occurred:", err)
            }
            )

    }

    render() {
        return (
            <Container fluid className="px-4" >
                <Row className="justify-content-between mb-6">
                    <Col className="d-flex align-items-center">
                        <h2 className="mb-0">TV Shows</h2>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="secondary"
                                id="dropdown-basic"
                                className="btn ml-2 btn-sm rounded-0"
                                style={{ backgroundColor: '#221f1f' }}
                            >
                                Gener
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="bg-dark">
                                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <div>
                        <i className="fa fa-th-large icons mr-2"></i>

                        <i className="fa fa-th icons"></i>

                    </div>
                </Row>

                {!this.state.err ?
                    <>
                        <Gallery loading={this.state.loading} title={"Spiderman"} movies={this.state.spiderman} />
                        <Gallery loading={this.state.loading} title={"Transformers"} movies={this.state.transformers} />
                        <Gallery loading={this.state.loading} title={"DeadPool"} movies={this.state.deadpool} />
                    </>
                    :
                    <>
                        <Alert variant="danger">
                            Please try again Later
                        </Alert>
                    </>
                }
            </Container>
        );
    }
}

export default Home;