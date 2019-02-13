import React from 'react';
import './Weekender.css';
import '../bootstrap.min.css';

import MovieCategories from "../movie-categories/MovieCategories";
import SelectedCategory from '../selected-category/SelectedCategory';

function Weekender() {
  return (
    <div className="container-fluid overflow-hidden">
      <h1 className="col-10 offset-1">Weekender</h1>
      <hr />
      <MovieCategories />
      <SelectedCategory />
    </div>
  );
}

export default Weekender;
