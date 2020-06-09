import React, { Component } from "react";
import { Alert, ListGroup, Badge } from "react-bootstrap";

class DishComments extends Component {
  render() {
    return (
      <>
        {this.props.selectedDish && (
          <ListGroup className="mt-5">
            <h2 className="text-center mb-3">{this.props.selectedDish.name}</h2>
            {this.props.selectedDish.comments.map((comment, index) => {
              let variant = "";
              switch (comment.rating) {
                case 1:
                  variant = "danger";
                  break;
                case 2:
                  variant = "warning";
                  break;
                case 3:
                  variant = "secondary";
                  break;
                default:
                  variant = "success";
                  break;
              }

              return (
                <ListGroup.Item key={index}>
                  {comment.author}: {comment.comment} |{" "}
                  <Badge pill variant={variant}>
                    {comment.rating}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
        {!this.props.selectedDish && (
          <Alert variant="secondary" className="mt-5">
            No dish selected, please click on a Dish to show the comments
          </Alert>
        )}
      </>
    );
  }
}

export default DishComments;
