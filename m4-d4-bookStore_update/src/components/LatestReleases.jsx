import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

const categories = ["history", "romance", "horror", "scifi", "fantasy"]

const books = {
  history: require("../history.json"),
  fantasy: require("../fantasy.json"),
  horror: require("../horror.json"),
  romance: require("../romance.json"),
  scifi: require("../scifi.json"),
}

class Latestrelease extends Component {
  state = {
    size: 4,
    categoryName: 'history',
    category: books.history,
  };

  categoryPicker = (event) => {
    this.setState({
      categoryName: event.target.value,
      category: books[event.target.value]
    })
  }

  increaseSize = () => {
    this.setState({
      size: this.state.size + 8,
    });
  };

  bookDetails = (event) => {
    this.props.props.history.push("/details/" + this.state.categoryName + "/" + event.currentTarget.closest("div").id)
  }



  render() {
    return (
      <>
        <select onChange={this.categoryPicker}>
          {console.log("Latest releases props", this.props.props)}

          {categories.map((category, index) => {
            return (
              <option className="options" key={`category-${index}`} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
            )
          })}
        </select>
        <br></br>
        <div className="row row-cols-1 row-cols-md-4">
          {this.state.category
            .slice(0, this.state.size)
            .map((book) => {
              return (
                <div className="col-6 col-md-4 col-lg-3 mb-3" key={book.asin}>
                  <Card id={book.asin} key={book.asin}>
                    <Card.Img variant="top" src={book.img} onClick={this.bookDetails} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.category}</Card.Text>
                      <Button variant="success">
                        Order it for just {book.price} $
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
        <Button variant="dark" onClick={this.increaseSize}>
          Show more books
        </Button>
      </>
    );
  }
}
export default Latestrelease;
