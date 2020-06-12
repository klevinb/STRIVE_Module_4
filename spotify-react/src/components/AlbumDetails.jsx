import React, { Component } from 'react';
import { Image, Col, Row, Spinner, Modal, Form, Button, FormControl, InputGroup } from 'react-bootstrap'
import CommentList from './CommentList'
import Song from './Song'
import './MainCss.css'
import { Link } from 'react-router-dom'

const commentUrl = "https://striveschool.herokuapp.com/api/comments/"
class AlbumDetails extends Component {

    state = {
        loading: true,
        editElement: null,
        editComment: false,
        showModal: false,
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

    deleteComment = async (id) => {
        const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
        const response = await fetch(commentsUrl + id, {
            method: "DELETE",
            headers: new Headers({
                'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                "Content-Type": "application/json",
            })
        })
        if (response.ok) {
            alert("Comment Deleted!")
            this.setState({
                showModal: !this.state.showModal
            });
        }
    }

    editComment = async (id) => {
        this.setState({
            editElement: id,
            editComment: !this.state.editComment,
            addComment: false
        });

    }
    editCommentFunction = async (e) => {
        e.preventDefault();
        const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
        const response = await fetch(commentsUrl + this.state.editElement, {
            method: "PUT",
            body: JSON.stringify(this.state.newComment),
            headers: new Headers({
                'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                "Content-Type": "application/json",
            }),
        });
        if (response.ok) {
            alert("Comment edited!");
            this.setState({
                showModal: !this.state.showModal,
                editComment: !this.state.editComment,
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
                showModal: !this.state.showModal,
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
            fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + this.state.newComment.elementId, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "b0688e745dmsh41b788a14af44c3p1bd80cjsn95f97f3e6443"
                }
            })
                .then(res => res.json())
                .then(respObj => this.setState({
                    album: respObj,

                })),

            fetch(commentUrl + this.state.newComment.elementId, {
                headers: new Headers({
                    'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                })
            })
                .then((response) => response.json())
                .then(respObj => this.setState({
                    coments: respObj,
                    loading: false
                }))

        ]).catch(err => console.log(err))
    }
    render() {
        return (
            <>
                {this.state.album &&
                    <Col md={10} className="col-10 gray-bg" >
                        <Row className="row row-cols-xs-1" >
                            <div id="content" className="col-12 col-md-4 d-flex justify-content-end">
                                <div id="artist" className="card mt-5">
                                    <Image onClick={this.showComments} src={this.state.album.cover_xl} style={{ height: "250px" }} />
                                    <p></p>
                                    <h4 id="label1">{this.state.album.artist.name} - {this.state.album.title}</h4>
                                    <button type="button" className="btn">PLAY</button>
                                    <Link to={"/artistdetails/" + this.state.album.artist.id}><label id="label2">{this.state.album.artist.name}</label></Link>
                                </div>
                            </div>
                            <div id="songs" className="col">
                                <div className="card">
                                    {this.state.album.tracks.data.map((song, i) =>
                                        <Song key={i} song={song} />
                                    )}
                                </div>
                            </div>
                        </Row>
                    </Col>
                }
                {this.state.loading &&
                    <Col md={10} style={{ height: "90vh" }} className="col-10 gray-bg" >
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
                <Modal className="modal_color"
                    show={this.state.showModal}
                    onHide={() => this.setState({ showModal: !this.state.showModal, addComment: false, editComment: false })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Movie comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="my-3">
                            {this.state.showModal &&
                                <CommentList loading={this.state.loading} deleteComment={this.deleteComment} editComment={this.editComment} id={this.state.newComment.elementId} />
                            }
                            <div className="d-flex justify-content-center mt-3">
                                <Button onClick={() => {
                                    this.setState({
                                        addComment: !this.state.addComment, editComment: false
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