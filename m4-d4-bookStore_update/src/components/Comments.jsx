import React, { Component } from 'react'
import { ListGroup, Button, Form, FormControl } from 'react-bootstrap'
import AddComments from './AddComments'

class Comments extends Component {

    state = {
        book_id: this.props.id,
        comments: [],
        editElement: null
    }



    render() {
        return (

            <>

                <ListGroup>
                    <Form className="mt-3" inline>
                        <FormControl type="text" placeholder="Search" onChange={(e) => this.filteredComments(e.target.value)} className="mr-sm-2" />
                    </Form>
                    {this.state.comments && this.state.comments.map((comment) => {
                        return (
                            <ListGroup.Item className="mt-3">
                                {comment.comment} : {comment.rate}
                                <div>
                                    <Button variant="danger" className="mr-2" onClick={() => this.deleteComment(comment._id)}>Delete</Button>
                                    <Button variant="warning" onClick={() => this.editComment(comment._id)}>Edit</Button>
                                </div>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>

                {this.state.comments && this.state.comments.map((comment) => {
                    return (
                        <>
                            {this.state.editElement &&
                                <AddComments editId={comment._id} />
                            }
                        </>
                    )
                })}
            </>
        )
    }
}

export default Comments