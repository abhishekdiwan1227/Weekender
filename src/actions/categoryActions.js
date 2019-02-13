import Axios from 'axios'

export function fetchCategories() {
    return dispatch => {
        dispatch(getCategoriesBegin());
        return Axios.get("http://localhost:8080/api/category/")
          .then(json => {
            dispatch(getCategoriesSuccess(json.data));
            return json.data;
          })
          .catch(error => dispatch(getCategoriesFailure(error)));
      };
}

export function getCategoriesBegin() {
    return {
        type: "FETCH_CATEGORIES_BEGIN"
    };
};

export function getCategoriesSuccess(categories) {
    return {
        type: "FETCH_CATEGORIES_SUCCESS",
        payload: {categories}
    };
};

export function getCategoriesFailure(error) {
    return {
        type: "FETCH_CATEGORIES_FAILURE",
        payload: {error}
    };
};

export function fetchAllMoviesComponent() {
    return {
        type: "FETCH_ALL_MOVIES_COMPONENT"
    }
}