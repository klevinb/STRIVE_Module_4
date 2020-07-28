import React, { Component } from 'react';
import { FormControl, Button, Card, Row, Col } from 'react-bootstrap'

class Shembull extends Component {

    state = {
        songs: [],
        search: "",
        favoriteSongs: []
    }

    fetchData = async () => {
        let resp = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=` + this.state.search, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
            }
        })
        if (resp.ok) {
            const data = await resp.json()
            this.setState({
                songs: data.data
            });
        }
    }

    updateState = (event) => {
        this.setState({
            search: event.currentTarget.value
        });
    }

    kengaPreferuar = (kenga) => {

        this.setState({
            songs: this.state.songs.filter(song => song.id !== kenga.id),
            favoriteSongs: [...this.state.favoriteSongs, kenga] // this.state.favorite.concant(kenga)
        });

    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-center mt-5">
                    <div className="d-flex" style={{ width: '200px' }}>
                        <FormControl type="text" onChange={this.updateState} placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" onClick={() => this.fetchData()}>Search</Button>
                    </div>
                </div>

                <div className="d-flex p-5">
                    <Row md={2} style={{ width: "40%" }}>
                        <>
                            <div>
                                <h1>Epoka</h1>
                                {this.state.songs.map(song =>
                                    <Col md={6}>
                                        <Card onClick={() => this.kengaPreferuar(song)} style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={song.album.cover_xl} />
                                            <Card.Body>
                                                <Card.Title>{song.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )}

                            </div>
                            <div>
                                <h1>Favorite EPOKA songs</h1>
                                <Col md={6}>
                                    {this.state.favoriteSongs.map(song =>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={song.album.cover_xl} />
                                            <Card.Body>
                                                <Card.Title>{song.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    )}
                                </Col>
                            </div>
                        </>
                    </Row>
                </div>
            </>
        );
    }
}

export default Shembull;