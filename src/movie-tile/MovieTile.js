import React, { Component } from 'react';
import './MovieTile.css'

class MovieTile extends Component {
    constructor(props) {
        super(props);
        this.dragStartEvent = this.dragStartEvent.bind(this);
    }

    dragStartEvent(event) {
        event.dataTransfer.setData("movie", this.props.movie);
    }

    render() {
        return (
            <div key={this.props.movie.title} className="movie-tile mx-3" draggable="true" onDragStart={this.dragStartEvent}>
                <img className="poster" src={this.props.movie.poster} alt={this.props.movie.title} />
                <h6>{this.props.movie.title}</h6>
                <h6>{this.props.movie.year}</h6>
            </div>
        )
    }
}

export default MovieTile;