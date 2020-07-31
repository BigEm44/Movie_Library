import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie, deleteMovie } from '../../store/actions/libraryActions';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { library, keyId } = this.props;
    this.state = {
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
    console.log(this.state);
  };

  handleSubmitTextArea = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state);
    this.props.deleteMovie(this.props.keyId);
  };

  render() {
    // console.log(this.props.library);
    // console.log(this.props.keyId);
    const { library, keyId } = this.props;
    const { Title, Year, Director, Runtime, Actors, Plot } = this.state;
    return (
      <div className="editMovie">
        <h2>EditMovie</h2>
        <div className="editMovie__textIputs">
          <div className="textInputs--title">
            <form onSubmit={this.handleSubmitTextArea}>
              <label htmlFor="title">Edit title</label>
              <textarea
                id="Title"
                name="Title"
                value={Title}
                onChange={this.handleChangeTextArea}
                row="20"
                cols="40"
              />
              <label htmlFor="year">Edit year</label>
              <textarea
                id="Year"
                name="Year"
                value={Year}
                onChange={this.handleChangeTextArea}
                row="2"
                cols="20"
              />
              <label htmlFor="director">Edit director</label>
              <textarea
                id="Director"
                name="Director"
                value={Director}
                onChange={this.handleChangeTextArea}
                row="2"
                cols="20"
              />
              <label htmlFor="runtime">Edit runtime</label>
              <textarea
                id="Runtime"
                name="Runtime"
                value={Runtime}
                onChange={this.handleChangeTextArea}
                row="2"
                cols="20"
              />

              <label htmlFor="actors">Edit actors</label>
              <textarea
                id="Actors"
                name="Actors"
                value={Actors}
                onChange={this.handleChangeTextArea}
                row="2"
                cols="20"
              />
              <label htmlFor="plot">Edit plot</label>
              <textarea
                id="Plot"
                name="Plot"
                value={Plot}
                onChange={this.handleChangeTextArea}
                row="2"
                cols="20"
              />
              <label>
                <button type="submit">Submit</button>
              </label>
            </form>

            {/* {library[keyId].Title} */}
            {/* </textarea> */}
          </div>
          {/* <div className="textInputs--year">
            <label htmlFor="year">Edit year</label>
            <textarea
              id="year"
              name="year"
              //value={Year}
              defaulValue={library[keyId].Title}
              onChange={this.handleChange}
              row="2"
              cols="20"
            >
              {library[keyId].Year}
            </textarea>
          </div>
          <div className="textInputs--director">
            <label htmlFor="director">Edit director</label>
            <textarea
              id="director"
              name="director"
              //value={Director}
              onChange={this.handleChange}
              row="2"
              cols="20"
            >
              {library[keyId].Director}
            </textarea>
          </div>
          <div className="textInputs--runtime">
            <label htmlFor="runtime">Edit runtime</label>
            <textarea
              id="runtime"
              name="runtime"
              //value={Runtime}
              onChange={this.handleChange}
              row="2"
              cols="20"
            >
              {library[keyId].Runtime}
            </textarea>
          </div>
          <div className="textInputs--actors">
            <label htmlFor="actors">Edit actors</label>
            <textarea
              id="actors"
              name="actors"
              //value={Actors}
              onChange={this.handleChange}
              row="2"
              cols="20"
            >
              {library[keyId].Actors}
            </textarea>
          </div>
          <div className="textInputs--plot">
            <label htmlFor="plot">Edit plot</label>
            <textarea
              id="plot"
              name="plot"
              // value={Plot}
              // onChange={this.handleChange}
              row="2"
              cols="20"
            >
              {library[keyId].Plot}
            </textarea>
          </div> */}
          {/* <div className="textInputs--button">
            <button onClick={this.handleSubmitTextArea}>Submit</button>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  library: state.library.library,
});

export default connect(mapStateToProps, { addMovie, deleteMovie })(EditMovie);
