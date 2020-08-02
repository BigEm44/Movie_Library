import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie, deleteMovie } from '../../store/actions/libraryActions';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { library, keyId } = this.props;
    this.state = {
      Poster: library[keyId].Poster,
      Title: library[keyId].Title,
      Year: library[keyId].Year,
      Director: library[keyId].Director,
      Runtime: library[keyId].Runtime,
      Actors: library[keyId].Actors,
      Plot: library[keyId].Plot,
    };
  }
  handleChangeTextArea = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitTextArea = (e) => {
    const { addMovie, deleteMovie, keyId, handleCloseEdit } = this.props;
    e.preventDefault();
    addMovie(this.state);
    deleteMovie(keyId);
    handleCloseEdit();
  };

  handleCloseEdit = () => {
    const { handleCloseEdit } = this.props;
    handleCloseEdit();
  };

  render() {
    const { edit } = this.props;
    const { Title, Year, Director, Runtime, Actors, Plot } = this.state;

    return edit ? (
      <div className="editMovie">
        <h2>EditMovie</h2>
        <form
          className="editMovie__textInputs"
          onSubmit={this.handleSubmitTextArea}
        >
          <label htmlFor="title">Edit title</label>
          <textarea
            id="Title"
            name="Title"
            value={Title}
            onChange={this.handleChangeTextArea}
            maxLength="30"
          />
          <label htmlFor="year">Edit year</label>
          <textarea
            id="Year"
            name="Year"
            value={Year}
            onChange={this.handleChangeTextArea}
            pattern="[0-9]{4}"
          />
          <label htmlFor="director">Edit director</label>
          <textarea
            id="Director"
            name="Director"
            value={Director}
            onChange={this.handleChangeTextArea}
            maxLength="20"
          />
          <label htmlFor="runtime">Edit runtime</label>
          <textarea
            id="Runtime"
            name="Runtime"
            value={Runtime}
            onChange={this.handleChangeTextArea}
            maxLength="8"
          />

          <label htmlFor="actors">Edit actors</label>
          <textarea
            id="Actors"
            name="Actors"
            value={Actors}
            onChange={this.handleChangeTextArea}
            maxLength="60"
          />
          <label htmlFor="plot">Edit plot</label>
          <textarea
            id="Plot"
            name="Plot"
            value={Plot}
            onChange={this.handleChangeTextArea}
          />
          <div className="editMovie__buttons">
            <button type="submit">Submit</button>
            <button onClick={this.handleCloseEdit}>Close</button>
          </div>
        </form>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  library: state.library.library,
});

export default connect(mapStateToProps, { addMovie, deleteMovie })(EditMovie);
