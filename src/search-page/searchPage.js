import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions/movieActions'

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword: "" };
        this.onKeywordChange = this.onKeywordChange.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
    }

    onKeywordChange(event) {
        var keyword = this.state.keyword;
        keyword = event.target.value;
        this.setState({ keyword: keyword });
    }

    searchMovies(event) {
        this.props.searchMovies(this.state.keyword);
    }

    render() {
        return (<div className="offset-3 col-10">
            <input type="text" onChange={this.onKeywordChange} value={this.state.keyword} />
            <input type="button" onClick={this.searchMovies} value="Search" />
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchPage: state.movies.searchPage
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        searchMovies: (keyword) => dispatch(searchMovies(keyword))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(SearchPage);
