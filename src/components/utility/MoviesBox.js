import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

class MoviesBox extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    content = movies.Response == 'True' ? <MovieCard /> : null;
    return <div className="movieBox">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesBox);
