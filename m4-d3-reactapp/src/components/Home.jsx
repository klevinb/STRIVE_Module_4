import React, { Component } from 'react';
import { Jumbotron, Button, InputGroup, FormControl, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'


let bookCategories = ["fantasy", "horror", "history", "scifi", "romance"]
let books = {
    fantasy: require('../data/fantasy.json'),
    horror: require('../data/horror.json'),
    history: require('../data/history.json'),
    scifi: require('../data/scifi.json'),
    romance: require('../data/romance.json'),
}
class Home extends Component {

    state = {
        categorySelected: "fantasy",
        books: books.fantasy.slice(0, 12),

    }

    hanndleChange = (category) => {
        this.setState({
            categorySelected: category,
            books: books[category].slice(0, 12),
        });
    }

    hanndleQuery = (searchQuery) => {
        let category = this.state.categorySelected

        if (searchQuery) {
            let filteredBook = books[category].filter((book) =>
                book.title.toLowerCase().includes(searchQuery)
            );
            this.setState({
                books: filteredBook,
            })
        } else {
            this.setState({
                books: books[category]
            });
        }
    }

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>{this.props.title}</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={this.state.categorySelected}
                        id="input-group-dropdown-1"
                    >
                        {bookCategories.map((category, index) => {
                            return (
                                < Dropdown.Item as="button" key={`category-${index}`} onClick={() => this.hanndleChange(category)}>{category}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" placeholder="Search for books" onChange={(event) => this.hanndleQuery(event.target.value)} />
                </InputGroup>

                <Container>
                    <Row>
                        {this.state.books.slice(0, 5).map((book) => {
                            return (
                                <Col xs={6} key={book.asin}>
                                    <Card style={{ width: '18rem' }} >
                                        <Card.Img variant="top" src={book.img} />
                                        <Card.Body>
                                            <Card.Title>{book.title}</Card.Title>
                                            <Card.Text>
                                                {book.price}
                                            </Card.Text>
                                            <p>{book.category}</p>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;