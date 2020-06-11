import React from 'react';
import { ListGroup } from 'react-bootstrap'


function CommentList(props) {
    return (
        <>
            <ListGroup>
                {props.comments.length > 0 ?

                    props.comments.map((comment, i) =>
                        <ListGroup.Item key={i}>{comment.comment}</ListGroup.Item>
                    )
                    :
                    <p>No comments</p>
                }
            </ListGroup>
        </>
    );
}

export default CommentList;