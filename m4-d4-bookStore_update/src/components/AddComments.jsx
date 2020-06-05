import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

class Comments extends Component {

    state = {
        done: false,
        comment: {
            elementId: this.props.id,
            rate: '',
            comment: ''
        },
        editId: this.props.editId

    }

    handelChange = (event) => {
        let comment = this.state.comment
        let id = event.currentTarget.id

        if (id === "rate") {
            comment[id] = parseInt(event.currentTarget.value)
        } else {
            comment[id] = event.currentTarget.value
        }
        this.setState({
            comment
        });
    }

    editComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch("https://striveschool.herokuapp.com/api/comments/" + this.state.editId, {
                method: "PUT",
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                alert("Your comment was successfuly added!")
            } else {
                alert("Something went wrong!")
            }
        } catch (err) {

        }
    }

    submitComment = async (e) => {
        e.preventDefault()

        try {
            let response = await fetch("https://striveschool.herokuapp.com/api/comments/", {
                method: "POST",
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                alert("Your comment was successfuly added!")
            } else {
                alert("Something went wrong!")
            }
        } catch (err) {

        }
    }



    render() {

        return (

            <>
                {!this.state.editId ?
                    <Form onSubmit={this.submitComment} className="mt-3">
                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="id">BOOK ID</Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        type="text"
                                        name="id"
                                        id="id"
                                        value={this.state.comment.elementId}
                                        disabled
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="comment">Comment</Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        type="text"
                                        name="comment"
                                        id="comment"
                                        value={this.state.comment.comment}
                                        onChange={this.handelChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="rate">
                                        Rate book</Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        as="select"
                                        name="rate"
                                        id="rate"
                                        value={this.state.comment.rate}
                                        onChange={this.handelChange}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button type="submit" >Submit</Button>
                    </Form>
                    :
                    <Form onSubmit={this.editComment} className="mt-3">
                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="id">BOOK ID</Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        type="text"
                                        name="id"
                                        id="id"
                                        value={this.state.editId}
                                        disabled
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="comment">Comment</Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        type="text"
                                        name="comment"
                                        id="comment"
                                        value={this.state.comment.comment}
                                        onChange={this.handelChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="rate">
                                        Rate book</Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        as="select"
                                        name="rate"
                                        id="rate"
                                        value={this.state.comment.rate}
                                        onChange={this.handelChange}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button type="submit" >Submit</Button>
                    </Form>

                }

            </>
        )
    }
}

export default Comments