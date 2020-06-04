import React from 'react';
import { Badge } from 'react-bootstrap';

function MyBadge(props) {
    return (
        <div>
            <h5>My badge <Badge variant={props.color}>{props.text}</Badge></h5>
        </div>
    );
}

export default MyBadge;