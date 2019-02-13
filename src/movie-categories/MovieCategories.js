import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchAllMoviesComponent } from '../actions/categoryActions'
import { fetchMovies } from '../actions/movieActions'
import './MovieCategories.css';

class MovieCategories extends Component {
    constructor(props) {
super(props);
this.handleDrop = this.handleDrop.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    handleDrop(event) {
        console.log(event.dataTransfer.getData("movie"));
        console.log(event.target);
    }

    render() {
        if (this.props.error) {
            return <div>Error! {this.props.error.message}</div>;
        }

        if (this.props.loading) {
            return <div>Loading...</div>;
        }

        if (this.props.categories) {
            return (
                <div className="sidenav py-3 col-2 offset-1">
                    <h6 className="btn btn-link movie-category" onClick={(event) => { this.props.searchMovies() }}>All</h6>
                    {this.props.categories.map(category =>
                        <h6 className="btn btn-link movie-category" key={category._id} onDrop={this.handleDrop} onClick={(event) => { this.props.fetchMovies(category._id) }}>{category.category}</h6>
                    )}
                </div>)
        }
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories.categories,
        error: state.categories.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchMovies: (categoryId) => dispatch(fetchMovies(categoryId)),
        searchMovies: () => dispatch(fetchAllMoviesComponent())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategories); 