import React, { Component } from 'react';
import { Image, Col, Row, Spinner, Modal, Form, Button, FormControl, InputGroup } from 'react-bootstrap'
import CommentList from './CommentList'
import './MainCss.css'
const commentUrl = "https://striveschool.herokuapp.com/api/comments/"
class AlbumDetails extends Component {

    state = {
        loading: true,
        showModal: false,
        albumId: this.props.match.params.id,
        album: undefined,
        coments: [],
        addComment: false,
        newComment: {
            comment: "",
            rate: 0,
            elementId: this.props.match.params.id,
        },

    }

    showComments = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    submitComment = async (e) => {
        e.preventDefault();
        const response = await fetch(commentUrl, {
            method: "POST",
            body: JSON.stringify(this.state.newComment),
            headers: new Headers({
                'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                "Content-Type": "application/json",
            }),
        });
        if (response.ok) {
            alert("Comment added");
            this.setState({
                selected: !this.state.selected,
                addComment: !this.state.addComment,
                newComment: {
                    comment: "",
                    rate: 0,
                    elementId: this.props.match.params.id,
                },
            });
        } else {
            alert("An error has occurred");
        }
    };
    handleRadioChange = (e) => {
        let newComment = this.state.newComment;
        newComment.rate = e.currentTarget.id;
        this.setState({ newComment });
    };
    handleCommentText = (e) => {
        let newComment = this.state.newComment;
        newComment.comment = e.currentTarget.value;
        this.setState({ newComment });
    };

    componentDidMount = async () => {
        Promise.all([
            fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + this.state.albumId, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
                }
            })
                .then(res => res.json())
                .then(respObj => this.setState({
                    album: respObj,
                    loading: false
                })),

            fetch(commentUrl + this.state.albumId, {
                headers: new Headers({
                    'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                })
            })
                .then((response) => response.json())
                .then(respObj => this.setState({
                    coments: respObj
                }))

        ]).catch(err => console.log(err))
    }
    render() {
        return (
            <>
                {this.state.loading &&
                    <Col md={10} style={{ height: "90vh" }} className="col-10 gray-bg" >
                        {console.log(this.props)}
                        <Row className="row row-cols-xs-1" >
                            <div id="content" className="col-12 col-md-4 d-flex justify-content-end">
                                <Spinner className="align-self-center" animation="border" variant="light" />
                            </div>
                            <div id="songs" className="col pt-5">
                                <Spinner className="align-self-center" animation="border" variant="light" />
                            </div>
                        </Row>
                    </Col>
                }
                {this.state.album &&
                    <Col md={10} className="col-10 gray-bg" >
                        <Row className="row row-cols-xs-1" >
                            <div id="content" className="col-12 col-md-4 d-flex justify-content-end">
                                <div id="artist" className="card mt-5">
                                    <Image onClick={this.showComments} src={this.state.album.cover_xl} style={{ height: "250px" }} />
                                    <p></p>
                                    <h4 id="label1">{this.state.album.artist.name} - {this.state.album.title}</h4>
                                    <button type="button" className="btn">PLAY</button>
                                    <label id="label2">{this.state.album.artist.name}</label>
                                </div>
                            </div>
                            <div id="songs" className="col">
                                <div className="card">
                                    {this.state.album.tracks.data.slice(0, 10).map((song, i) =>

                                        <div key={i}>
                                            <div className="d-flex justify-content-between">
                                                <p><i className="fa fa-music pr-3"></i>{song.title}</p>
                                                <p>{song.duration / 100}</p>
                                            </div>
                                            <div className="text-left">
                                                <p>{song.artist.name}</p>
                                            </div>
                                            <p className="songNr">{i}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Row>
                    </Col>
                }
                <Modal className="modal_color"
                    show={this.state.showModal}
                    onHide={() => this.setState({ showModal: !this.state.showModal })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Movie comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="my-3">
                            {this.state.showModal &&
                                <CommentList deleteComment={this.deleteComment} editComment={this.editComment} id={this.state.albumId} />
                            }
                            <div className="d-flex justify-content-center mt-3">
                                <Button onClick={() => {
                                    this.setState({
                                        addComment: !this.state.addComment
                                    });
                                }}>Add Comment</Button>
                            </div>
                            {this.state.addComment &&
                                <div className="text-center">
                                    <h5 className="my-3">Add a comment</h5>
                                    <Form onSubmit={this.submitComment}>
                                        <div className="my-3 text-center">
                                            <Form.Check
                                                inline
                                                label="1"
                                                type="radio"
                                                id="1"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="2"
                                                type="radio"
                                                id="2"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="3"
                                                type="radio"
                                                id="3"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="4"
                                                type="radio"
                                                id="4"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="5"
                                                type="radio"
                                                id="5"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                        </div>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Write your comment"
                                                aria-label="comment"
                                                aria-describedby="basic-addon1"
                                                onChange={this.handleCommentText}
                                                value={this.state.newComment.comment}
                                            />
                                        </InputGroup>
                                        <Button variant="primary" type="submit">
                                            Submit
                                    </Button>
                                    </Form>
                                </div>
                            }
                            {this.state.editComment &&
                                <div className="text-center">
                                    <h5 className="my-3">Edit this Comment</h5>
                                    <Form onSubmit={this.editCommentFunction}>
                                        <div className="my-3 text-center">
                                            <Form.Check
                                                inline
                                                label="1"
                                                type="radio"
                                                id="1"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="2"
                                                type="radio"
                                                id="2"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="3"
                                                type="radio"
                                                id="3"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="4"
                                                type="radio"
                                                id="4"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                            <Form.Check
                                                inline
                                                label="5"
                                                type="radio"
                                                id="5"
                                                name="rating"
                                                onClick={this.handleRadioChange}
                                            />
                                        </div>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Write your comment"
                                                aria-label="comment"
                                                aria-describedby="basic-addon1"
                                                onChange={this.handleCommentText}
                                                value={this.state.newComment.comment}
                                            />
                                        </InputGroup>
                                        <Button variant="primary" type="submit">
                                            Edit
                            </Button>
                                    </Form>
                                </div>
                            }
                        </div>
                    </Modal.Body>
                </Modal>

            </>
        );
    }
}

export default AlbumDetails;