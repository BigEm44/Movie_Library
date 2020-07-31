import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../../store/actions/libraryActions';
import EditMovie from '../../components/utility/EditMovie';

class LibraryCard extends Component {
  state = {
    edit: false,
  };

  handleEdit = () => {
    this.setState({
      edit: true,
    });
    //console.log(this.props.keyId);
  };

  handleDelete = () => {
    this.props.deleteMovie(this.props.keyId);
  };

  render() {
    const { library, keyId } = this.props;
    console.log(this.state.edit);
    // console.log(keyId);
    return (
      <div className="libraryCard">
        <div className="libraryCard__poster">
          <img src={library.Poster} alt="Movie Poster" />
        </div>
        <div className="libraryCard__details">
          <h2>{library.Title}</h2>
          <p>
            <span>Year:</span> {library.Year}
          </p>
          <p>
            <span>Director:</span> {library.Director}
          </p>
          <p>
            <span>Runtime:</span> {library.Runtime}
          </p>
          <p>
            <span>Actors:</span> {library.Actors}
          </p>
        </div>
        <div className="libraryCard__plot">
          <p>
            <span>Plot:</span> {library.Plot}
          </p>
        </div>
        <div className="libraryCard__buttons">
          {/* <Link to="/editMovie">Edit</Link> */}
          <button onClick={this.handleEdit}>Edit</button>

          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <div>{this.state.edit ? <EditMovie keyId={keyId} /> : null}</div>
      </div>
    );
  }
}

export default connect(null, { deleteMovie })(LibraryCard);
