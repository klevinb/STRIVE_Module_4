import React, { Component } from 'react';
import "./MainCss.css"
import "./ContentCss.css"
import { Col, Image, Button, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Content extends Component {

    state = {
        loading: true,
        noizy: null,
        eminem: null,
        adele: null,
        drake: null,
        ledri: null,
        jessie: null

    }

    componentDidMount = async () => {
        Promise.all(
            [
                fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=noizy`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
                    }
                })
                    .then(resp => resp.json())
                    .then(respObj => this.setState(
                        {
                            noizy: respObj
                        }
                    )),

                fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
                    }
                })
                    .then(resp => resp.json())
                    .then(respObj => this.setState(
                        {
                            eminem: respObj
                        }
                    )),

                fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=adele`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
                    }
                })
                    .then(resp => resp.json())
                    .then(respObj => this.setState(
                        {
                            adele: respObj
                        }
                    )),
                fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=drake`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
                    }
                })
                    .then(resp => resp.json())
                    .then(respObj => this.setState(
                        {
                            drake: respObj
                        }
                    )),
                fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=ledri`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
                    }
                })
                    .then(resp => resp.json())
                    .then(respObj => this.setState(
                        {
                            ledri: respObj
                        }
                    )),
                fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=jessie`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
                    }
                })
                    .then(resp => resp.json())
                    .then(respObj => this.setState(
                        {
                            jessie: respObj
                        }
                    )),
            ]
        )
            .then(() => this.setState({
                loading: !this.state.loading
            }))
    }

    render() {
        return (
            <>
                {this.state.loading ?
                    <Col md={10} className="myAlbum" style={{ height: '90vh' }} >

                        <div className="d-flex justify-content-center" style={{ height: '400px', marginBottom: '150px' }} >
                            <Spinner className="align-self-center" animation="border" variant="light" />
                        </div>

                        <div id="artistCards" className="row row-cols-1 row-cols-sm-2  row-cols-md-4 row-cols-lg-6 bolder justify-content-center " id="removeMarg">
                            <>
                                {[1, 2, 3].map((item, i) =>
                                    <Row key={i} className="row row-cols-xs-1" >
                                        <div id="content" className="col-12 col-md-4 d-flex justify-content-end">
                                            <Spinner className="align-self-center" animation="border" variant="light" />
                                        </div>
                                    </Row>
                                )}
                            </>
                        </div>
                    </Col>

                    :
                    <Col md={10} className="myAlbum" >

                        <div className=" d-flex  bolder justify-content-center" id="imgBackground" >

                            <div id="text_alg" className=" flex-column">
                                <p>33.000 MONTHLY USERS</p>
                                <h1>Eminem</h1>

                                <div className="  flex-row  justify-content-center" >
                                    <Button className="btn btn-primary btn1">Play</Button>
                                    <Button className="btn btn-outline-primary btn2" >Follow</Button>
                                    <Button className="btn btn-outline-primary btn3"> <i className="fa" >&#xf141;</i> </Button>
                                </div>

                                <div className=" menu bolder">
                                    {console.log(this.state)}
                                    <a href="artistPage.html" className="a1">OVERVIEW</a>
                                    <a href="artistPage.html" className="a1">RELATED ARTISTS</a>
                                    <a href="artistPage.html" className="a1">ABOUT</a>
                                </div>
                            </div >
                        </div>

                        <div id="content" >
                            <div className="container mt-3 justify-content-center ">
                                <div className="row  " >
                                    <h4 className="bolder pr-3"> Albums</h4>
                                    <hr></hr>
                                </div>
                            </div>

                            <div id="artistCards" className="row row-cols-1 row-cols-sm-2  row-cols-md-4 row-cols-lg-6 bolder justify-content-center " id="removeMarg">
                                {this.state.noizy &&
                                    <>
                                        <Col md={2} className="mr-3">
                                            <div className="card" style={{ width: '10rem' }} >
                                                <Link to={"/albumdetails/" + this.state.noizy.data[8].album.id}><Image fluid src={this.state.noizy.data[8].album.cover_xl} className="card-img-top" /></Link>
                                                <div className="card-body d-flex justify-content-between flex-column" >
                                                    <Link to={"/artistdetails/" + this.state.noizy.data[8].artist.id}><h5 className="card-title">{this.state.noizy.data[8].artist.name}</h5></Link>
                                                    <p className="card-text " >{this.state.noizy.data[8].album.title}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                }
                                {this.state.eminem &&
                                    <>
                                        <Col md={2} className="mr-3">
                                            <div className="card" style={{ width: '10rem' }} >
                                                <Link to={"/albumdetails/" + this.state.eminem.data[8].album.id}><Image fluid src={this.state.eminem.data[8].album.cover_xl} className="card-img-top" /></Link>
                                                <div className="card-body d-flex justify-content-between flex-column" >
                                                    <Link to={"/artistdetails/" + this.state.eminem.data[8].artist.id}><h5 className="card-title">{this.state.eminem.data[8].artist.name}</h5></Link>
                                                    <p className="card-text " >{this.state.eminem.data[8].album.title}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                }
                                {this.state.adele &&
                                    <>
                                        <Col md={2} className="mr-3">
                                            <div className="card" style={{ width: '10rem' }} >
                                                <Link to={"/albumdetails/" + this.state.adele.data[8].album.id}><Image fluid src={this.state.adele.data[8].album.cover_xl} className="card-img-top" /></Link>
                                                <div className="card-body d-flex justify-content-between flex-column" >
                                                    <Link to={"/artistdetails/" + this.state.adele.data[8].artist.id}><h5 className="card-title">{this.state.adele.data[8].artist.name}</h5></Link>
                                                    <p className="card-text " >{this.state.adele.data[8].album.title}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                }
                                {this.state.drake &&
                                    <>
                                        <Col md={2} className="mr-3">
                                            <div className="card" style={{ width: '10rem' }} >
                                                <Link to={"/albumdetails/" + this.state.drake.data[8].album.id}><Image fluid src={this.state.drake.data[8].album.cover_xl} className="card-img-top" /></Link>
                                                <div className="card-body d-flex justify-content-between flex-column" >
                                                    <Link to={"/artistdetails/" + this.state.drake.data[8].artist.id}><h5 className="card-title">{this.state.drake.data[8].artist.name}</h5></Link>
                                                    <p className="card-text " >{this.state.drake.data[8].album.title}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                }
                                {this.state.ledri &&
                                    <>
                                        <Col md={2} className="mr-3">
                                            <div className="card" style={{ width: '10rem' }} >
                                                <Link to={"/albumdetails/" + this.state.ledri.data[8].album.id}><Image fluid src={this.state.ledri.data[8].album.cover_xl} className="card-img-top" /></Link>
                                                <div className="card-body d-flex justify-content-between flex-column" >
                                                    <Link to={"/artistdetails/" + this.state.ledri.data[8].artist.id}><h5 className="card-title">{this.state.ledri.data[8].artist.name}</h5></Link>
                                                    <p className="card-text " >{this.state.ledri.data[8].album.title}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                }
                                {this.state.jessie &&
                                    <>
                                        <Col md={2} className="mr-3">
                                            <div className="card" style={{ width: '10rem' }} >
                                                <Link to={"/albumdetails/" + this.state.jessie.data[8].album.id}><Image fluid src={this.state.jessie.data[8].album.cover_xl} className="card-img-top" /></Link>
                                                <div className="card-body d-flex justify-content-between flex-column" >
                                                    <Link to={"/artistdetails/" + this.state.jessie.data[8].artist.id}><h5 className="card-title">{this.state.jessie.data[8].artist.name}</h5></Link>
                                                    <p className="card-text " >{this.state.jessie.data[8].album.title}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                }
                            </div>
                        </div>

                    </Col>
                }
            </>
        );
    }
}

export default Content;