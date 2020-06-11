import React, { Component } from 'react';
import { Col, Image, Modal, Button } from 'react-bootstrap'
import CommentList from './CommentList'

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }


    handleClick = (id) => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
        this.props.fetchComments(id)

    }

    render() {
        return (
            <Col key={this.props.src.imdbID}>
                <>

                    <Image fluid src={this.props.src.Poster} onClick={() => this.handleClick(this.props.src.imdbID)} />
                    <Modal show={this.state.isModalVisible} onHide={this.handleClick}>
                        <Modal.Header closeButton>
                            <Modal.Title>Comments</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CommentList comments={this.props.comments} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary">
                                Add Comment
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </Col >
        );
    }
}

export default Movie;