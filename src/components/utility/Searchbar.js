import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from '../../store/actions/searchActions';

class Searchbar extends Component {
  handleChange = (e) => {
    const { searchMovie } = this.props;
    searchMovie(e.target.value);
  };

  handleSubmit = (e) => {
    const { fetchMovies, setLoading, searchMovie } = this.props;
    e.preventDefault();
    fetchMovies(this.props.text);
    setLoading();
    searchMovie('');
  };
  render() {
    const { text } = this.props;
    return (
      <div className="dashboard">
        <h2>Find movie</h2>
        <div className="dashboard__inputForm">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Enter movie title"
              value={this.props.text}
              onChange={this.handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(Searchbar);
