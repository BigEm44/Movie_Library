import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userMovie, addMovie } from '../../store/actions/libraryActions';

class AddMovie extends Component {
  state = {
    Title: '',
    Year: '',
    Director: '',
    Runtime: '',
    Actors: '',
    Plot: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    const { addMovie } = this.props;
    e.preventDefault();
    addMovie(this.state);
    this.setState({
      Title: '',
      Year: '',
      Director: '',
      Runtime: '',
      Actors: '',
      Plot: '',
    });
  };

  render() {
    const { Title, Year, Director, Runtime, Actors, Plot } = this.state;

    return (
      <div className="addMovie">
        <h2>Add your movie</h2>
        <form onSubmit={this.handleSubmitForm}>
          <label>
            <p>Title</p>
            <input
              type="text"
              name="Title"
              value={Title}
              onChange={this.handleChange}
              required
              maxLength="30"
            />
          </label>
          <label>
            <p>Year</p>
            <input
              type="text"
              name="Year"
              value={Year}
              onChange={this.handleChange}
              required
              pattern="[0-9]{4}"
            />
          </label>
          <label>
            <p>Director</p>
            <input
              type="text"
              name="Director"
              value={Director}
              onChange={this.handleChange}
              required
              maxLength="20"
            />
          </label>
          <label>
            <p>Plot</p>
            <input
              type="text"
              name="Plot"
              value={Plot}
              onChange={this.handleChange}
              required
              maxLength="250"
            />
          </label>
          <p>Runtime</p>
          <input
            type="text"
            name="Runtime"
            value={Runtime}
            onChange={this.handleChange}
            maxLength="8"
          />
          <label>
            <p>Actors</p>
            <input
              type="text"
              name="Actors"
              value={Actors}
              onChange={this.handleChange}
              maxLength="60"
            />
          </label>
          <label className="addMovie--button">
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userMovie: state.library.userMovie,
});

export default connect(mapStateToProps, { addMovie })(AddMovie);
