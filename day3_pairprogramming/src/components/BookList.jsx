import React, { Component } from 'react';
import SingleBook from './SingleBook';
import { Row, InputGroup, FormControl } from 'react-bootstrap';

class BookList extends Component {

    state = {
        books: this.props.book
    }

    searchQuery = (searchQueryInput) => {
        let booksT = this.state.books

        if (searchQueryInput) {
            let filteredBooks = booksT.filter((book) => book.title.toLowerCase().includes(searchQueryInput))
            this.setState({
                books: filteredBooks
            });
        } else {

            this.setState({
                books: booksT
            });
        }


    }

    render() {
        return (

            <>
                <InputGroup size="sm" className="mb-3">
                    <FormControl
                        aria-label="Small"
                        placeholder="Search with the title of the book"
                        onChange={(event) => this.searchQuery(event.target.value)}
                        className="text-center"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <Row className="row-cols-1 row-cols-lg-5">
                    {this.state.books.map(ListBook => <SingleBook book={ListBook} />)}
                </Row>

            </>

        );

    }

}

export default BookList;