import React, { Component } from 'react';
import { FormControl, Button, Card } from 'react-bootstrap'

class ReactClass extends Component {

    state = {
        songs: [],
        search: '',
        selectedImg: []
    }

    handlechange = (event) => {
        this.setState({
            search: event.currentTarget.value
        });
    }

    handleClick = (song) => {
        this.setState({
            //selectedImg: this.state.selectedImg.concat(song)
            selectedImg: [...this.state.selectedImg, song],
            songs: this.state.songs.filter(x => x.id !== song.id)
        });
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

    render() {
        return (
            <>
                <div>
                    <FormControl type="text" onChange={this.handlechange} placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success" onClick={this.fetchData}>Search</Button>
                </div>

                {this.state.songs.slice(0, 3).map(song =>
                    <Card onClick={() => this.handleClick(song)} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={song.album.cover_xl} />
                        <Card.Body>
                            <Card.Title>{song.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                      </Card.Text>
                        </Card.Body>
                    </Card>
                )}

            </>
        );
    }
}

export default ReactClass;