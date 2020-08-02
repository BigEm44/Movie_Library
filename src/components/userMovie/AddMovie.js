import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../store/actions/libraryActions';
import { addForm } from '../../store/actions/formActions';

class AddMovie extends Component {
  handleChange = (e) => {
    const { addForm } = this.props;
    const { name, value } = e.target;
    const newValues = { [name]: value };
    addForm(newValues);
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { addMovie, form } = this.props;
    addMovie(form);
    alert('Your movie is added to the library.');
  };

  render() {
    const { Title, Year, Director, Runtime, Actors, Plot } = this.props;
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
  form: state.form,
});

export default connect(mapStateToProps, { addMovie, addForm })(AddMovie);
