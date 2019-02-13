var initialState = {
    movies: [],
    loading: false,
    error: null,
    searchPage: false
}

export default function movies(state = initialState, action) {
    switch (action.type) {
        case "FETCH_MOVIES_BEGIN":
            return { ...state, loading: true, searchPage: false, error: null };
        case "FETCH_MOVIES_SUCCESS":
            return { ...state, loading: false, searchPage: false, movies: action.payload.movies };
        case "FETCH_MOVIES_FAILURE":
            return { ...state, loading: false, searchPage: false, error: action.payload.error };
        case "FETCH_ALL_MOVIES_COMPONENT":
            return { ...state, loading: false, searchPage: true };
        case "SEARCH_MOVIES_BEGIN":
            return { ...state, loading: true, searchPage: false, error: null };
        case "SEARCH_MOVIES_SUCCESSFUL":
            return { ...state, loading: false, searchPage: false, movies: action.payload.movies };
        case "SEARCH_MOVIES_FAILURE":
            return { ...state, loading: false, searchPage: false, error: action.payload.error };
        default: return state;
    }
}