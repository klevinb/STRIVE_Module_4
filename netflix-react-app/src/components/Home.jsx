import React, { Component } from 'react';
import { Container, Row, Col, Dropdown, Spinner } from 'react-bootstrap'
import Gallery from './Gallery'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayGalery: false,
        };
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({
            displayGalery: !this.state.displayGalery
        }), 1000)
    }

    componentDidUpdate = () => {
        if (this.state.displayGalery === true) {
            setTimeout(() => this.setState({
                displayGalery: !this.state.displayGalery
            }), 4000)
        }
    }

    render() {
        return (
            <Container fluid className="px-4" >
                <Row className="justify-content-between mb-4">
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
                {this.state.displayGalery ?
                    <>
                        <Gallery title={"Trending Now"} />
                        <Gallery title={"Action"} imageSrc={"/images/image3.jpg"} />
                        <Gallery title={"Drama"} imageSrc={"/images/image5.jpg"} />
                    </>
                    :
                    <>
                        <Spinner animation="grow" variant="light" size="sm" />
                        <Spinner animation="grow" variant="light" />
                    </>
                }
            </Container>
        );
    }
}

export default Home;