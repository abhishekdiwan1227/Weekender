import Axios from 'axios'

export function fetchMovies(categoryId) {
    return dispatch => {
        dispatch(getMoviesBegin());
        return Axios.get(`http://localhost:8080/api/movie/category/${categoryId}`)
          .then(json => {
            dispatch(getMoviesSuccess(json.data));
            return json.data;
          })
          .catch(error => dispatch(getMoviesFailure(error)));
      };
}

export function getMoviesBegin() {
    return {
        type: "FETCH_MOVIES_BEGIN"
    };
};

export function getMoviesSuccess(movies) {
    return {
        type: "FETCH_MOVIES_SUCCESS",
        payload: {movies}
    };
};

export function getMoviesFailure(error) {
    return {
        type: "FETCH_MOVIES_FAILURE",
        payload: {error}
    };
};

export function searchMovies(keyword) {
    return dispatch => {
        dispatch(searchMoviesBegin());
        return Axios.get(`http://localhost:8080/api/movie/search/${keyword}`)
          .then(json => {
            dispatch(searchMoviesSuccessful(json.data));
            return json.data;
          })
          .catch(error => dispatch(searchMoviesFailure(error)));
      };
}

export function searchMoviesBegin() {
    return {
        type: "SEARCH_MOVIES_BEGIN"
    }
}

export function searchMoviesSuccessful(movies) {
    return {
        type: "SEARCH_MOVIES_SUCCESSFUL",
        payload: {movies}
    }
}

export function searchMoviesFailure(error) {
    return {
        type: "SEARCH_MOVIES_FAILURE",
        payload: {error}

    }
}