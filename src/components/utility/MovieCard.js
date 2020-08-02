import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../store/actions/libraryActions';

class MovieCard extends Component {
  handleSubmit = () => {
    const { movies } = this.props;
    this.props.addMovie(movies);
    alert('Movie is added to the library');
  };
  render() {
    const { movies } = this.props;
    return (
      <div className="movieCard">
        <h2>{movies.Title}</h2>
        <div className="movieCard--poster">
          <img src={movies.Poster} alt="Movie Poster" />
        </div>
        <p>
          <span>Year:</span> {movies.Year}
        </p>
        <p>
          <span>Director:</span> {movies.Director}
        </p>
        <p>
          <span>Runtime:</span> {movies.Runtime}
        </p>
        <p>
          <span>Actors:</span> {movies.Actors}
        </p>
        <p>
          <span>Plot:</span> {movies.Plot}
        </p>
        <div className="movieCard--addButton">
          <button onClick={this.handleSubmit}>Add to library</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});
export default connect(mapStateToProps, { addMovie })(MovieCard);
