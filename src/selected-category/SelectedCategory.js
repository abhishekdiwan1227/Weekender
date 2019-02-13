import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieTile from '../movie-tile/MovieTile';
import SearchPage from '../search-page/searchPage'

class SelectedCategory extends Component {
    render() {
        if (this.props.searchPage) {
            return (
                <div>
                    <SearchPage />
                </div>
            )
        }

        if (this.props.error) {
            return <div>Error! {this.props.error.message}</div>;
        }

        if (this.props.loading) {
            return <div>Loading...</div>;
        }

        if (this.props.movies) {
            return (
                <div className="offset-3 col-10">
                    {this.props.movies.map(movie =>
                        <MovieTile key={movie.name} movie={movie} />
                    )}
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.movies,
        error: state.movies.error,
        loading: state.movies.loading,
        searchPage: state.movies.searchPage
    }
}

export default connect(mapStateToProps)(SelectedCategory);
