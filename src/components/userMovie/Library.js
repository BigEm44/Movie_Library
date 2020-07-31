import React, { Component } from 'react';
import { connect } from 'react-redux';
import LibraryCard from '../utility/LibraryCard';

class Library extends Component {
  render() {
    const { library } = this.props;

    return library.length === 0 ? (
      <h2 className="libraryWarning">No movie in library</h2>
    ) : (
      library.map((singleMovie, index) => (
        <div className="library">
          <LibraryCard library={singleMovie} keyId={index} />
        </div>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  library: state.library.library,
});

export default connect(mapStateToProps)(Library);
