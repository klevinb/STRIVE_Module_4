import React, { Component } from "react";
import "./App.css";
import { Container, Alert, Dropdown } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harryPotterMovies: [],
      spiderManMovies: [],
      starWarsMovies: [],
      searchedMovies: [],
      loading: true,
      error: false,
    };
  }

  url = "http://www.omdbapi.com/?apikey=71eeae0a";

  fetchMovies = () => {
    Promise.all([
      fetch(this.url + "&s=harry%20potter")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ harryPotterMovies: responseObject.Search })
        ),
      fetch(this.url + "&s=spider%20man")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ spiderManMovies: responseObject.Search })
        ),
      fetch(this.url + "&s=star%20wars")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ starWarsMovies: responseObject.Search })
        ),
    ])
      .then(() => this.setState({ loading: false }))
      .catch((err) => {
        this.setState({ error: true });
        console.log("An error has occurred:", err);
      });
  };
  componentDidMount = () => {
    this.fetchMovies();
  };

  showSearchResult = (searchString) => {
    fetch(this.url + "&s=" + searchString)
      .then((response) => response.json())
      .then((responseObject) => {
        if (responseObject.Response === "True") {
          this.setState({ searchedMovies: responseObject.Search });
          console.log(responseObject.Search);
        } else {
          alert("Search something that exists!");
        }
      });
  };

  resetState = () => {
    this.setState({
      harryPotterMovies: [],
      spiderManMovies: [],
      starWarsMovies: [],
      searchedMovies: [],
      loading: true,
      error: false,
    });
    this.fetchMovies();
  };

  render() {
    return (
      <div className='App'>
        <div>
          <Navbar
            showSearchResult={this.showSearchResult}
            resetState={this.resetState}
          />
          <Container fluid className='px-4'>
            <div className='d-flex justify-content-between'>
              <div className='d-flex'>
                <h2 className='mb-4'>TV Shows</h2>
                <div className='ml-4 mt-1'>
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{ backgroundColor: "#221f1f" }}
                      id='dropdownMenuButton'
                      className='btn-secondary btn-sm dropdown-toggle rounded-0'
                    >
                      Genres
                    </Dropdown.Toggle>
                    <Dropdown.Menu bg='dark'>
                      <Dropdown.Item href='#/action-1'>Comedy</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>Drama</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>Thriller</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div>
                <i className='fa fa-th-large icons'></i>
                <i className='fa fa-th icons'></i>
              </div>
            </div>
            {this.state.error && (
              <Alert variant='danger' className='text-center'>
                An error has occurred, please try again later
              </Alert>
            )}
            {this.state.searchedMovies.length > 0 && (
              <Gallery
                title='Search results'
                movies={this.state.searchedMovies}
                props={this.props}
              />
            )}
            {!this.state.error && !this.state.searchedMovies.length > 0 && (
              <>
                <Gallery
                  title='Harry Potter'
                  loading={this.state.loading}
                  movies={this.state.harryPotterMovies.slice(0, 6)}
                  props={this.props}
                />

                <Gallery
                  title='Spider Man'
                  loading={this.state.loading}
                  movies={this.state.spiderManMovies.slice(0, 6)}
                  props={this.props}
                />
                <Gallery
                  title='Star Wars'
                  loading={this.state.loading}
                  movies={this.state.starWarsMovies.slice(0, 6)}
                  props={this.props}
                />
              </>
            )}

            <Footer />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
