import React, { Component } from 'react';
import './MainCss.css';
import Navbar from './MyNavbar'
import Footer from './MyFooter'
import Comments from './Comments'
import { Container, Row, Col, Image, Badge, Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';


const books = {
    history: require("../history.json"),
    fantasy: require("../fantasy.json"),
    horror: require("../horror.json"),
    romance: require("../romance.json"),
    scifi: require("../scifi.json"),
}

class BookDetails extends Component {

    state = {
        addComment: false,
        showEditForm: false,
        editComment: '',
        showModal: false,
        selectedElement: null,
        book: null,
        newComment: {
            comment: "",
            rate: 0,
            elementId: this.props.match.params.id,
        },
    }

    componentDidMount = () => {
        let filteredBook = books[this.props.match.params.category].filter((book) => book.asin === this.state.newComment.elementId)
        this.setState({
            book: filteredBook,
            showBook: !this.state.showBook
        });

    }

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

    deleteComment = async (id) => {
        let response = await fetch("https://striveschool.herokuapp.com/api/comments/" + id, {
            method: "DELETE",
            headers: {
                'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            alert("Comment was dellted!")
            this.setState({
                showModal: !this.state.showModal
            });
        }
    }

    editComment = async (id) => {
        this.setState({
            editComment: id,
            showEditForm: !this.state.showEditForm
        });

    }

    editCommentFunction = async (e) => {
        e.preventDefault()
        let response = await fetch("https://striveschool.herokuapp.com/api/comments/" + this.state.editComment, {
            method: "PUT",
            body: JSON.stringify(this.state.newComment),
            headers: {
                'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            alert("The comment was edited!")
            this.setState({
                newComment: {
                    comment: "",
                    rate: 0,
                    elementId: this.props.match.params.id,
                },
                showModal: !this.state.showModal,
                showEditForm: !this.state.showEditForm
            });
        }

    }

    submitComment = async (e) => {
        e.preventDefault()

        try {
            let response = await fetch("https://striveschool.herokuapp.com/api/comments/", {
                method: "POST",
                body: JSON.stringify(this.state.newComment),
                headers: {
                    'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                alert("Your comment was successfuly added!")
                this.setState({
                    newComment: {
                        comment: "",
                        rate: 0,
                        elementId: this.props.match.params.id,
                    },
                    addComment: !this.state.addComment,
                    showModal: !this.state.showModal,
                });
            } else {
                alert("Something went wrong!")
            }
        } catch (err) {

        }
    }

    render() {
        return (
            <>
                <Navbar />
                <Container fluid className="mt-0 pb-4" id="bookDetails">
                    <Container>
                        <>
                            {this.state.book &&
                                <Row>
                                    <Col md={4}>
                                        <Image src={this.state.book[0].img}
                                            fluid
                                            onClick={() => this.setState({
                                                selectedElement: this.state.newComment.elementId,
                                                showModal: !this.state.showModal
                                            })}
                                        />
                                    </Col>
                                    <Col md={8}>
                                        <h3><Badge variant="danger">Title</Badge></h3>
                                        <p>{this.state.book[0].title}</p>
                                        <h3><Badge variant="info">Title</Badge></h3>
                                        <p>{this.state.book[0].category.slice(0, 1).toUpperCase()}{this.state.book[0].category.slice(1)}</p>
                                        <h3><Badge variant="success">Price</Badge></h3>
                                        <p>{this.state.book[0].price} $</p>
                                    </Col>
                                </Row>
                            }
                            {this.state.selectedElement &&
                                <Modal className="modal_color"
                                    show={this.state.showModal}
                                    onHide={() => this.setState({
                                        selectedElement: !this.state.showModal,
                                        addComment: false
                                    })}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Movie comments</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="my-3">
                                            {this.state.selectedElement &&
                                                <Comments deleteComment={this.deleteComment} editComment={this.editComment} id={this.state.selectedElement} />
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
                                            {this.state.showEditForm &&
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
                            }
                        </>
                    </Container>
                </Container>
                <Footer />
            </>
        );
    }
}

export default BookDetails; 