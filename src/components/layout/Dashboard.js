import React, { Component } from 'react';
import { connect } from 'react-redux';
import Searchbar from '../utility/Searchbar';
import Loading from '../utility/Loading';
import MoviesBox from '../utility/MoviesBox';

class Dashboard extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="dashboard">
        <Searchbar />
        {loading ? <Loading /> : <MoviesBox />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Dashboard);
