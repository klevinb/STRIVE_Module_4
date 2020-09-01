import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Movie extends Component {
  render() {
    return (
      <Col className='mb-2' key={this.props.data.imdbID}>
        <img
          className='img-fluid'
          src={
            this.props.data.Poster === "N/A"
              ? "https://via.placeholder.com/150"
              : this.props.data.Poster
          }
          alt='movie'
          onClick={() => {
            this.props.info.history.push("/details/" + this.props.data.imdbID);
          }}
        />
      </Col>
    );
  }
}

export default Movie;
