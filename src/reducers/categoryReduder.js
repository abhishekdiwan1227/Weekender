var initialState = {
    categories: [],
    loading: false,
    error: null
}

export default function categories(state = initialState, action) {
    switch (action.type) {
        case "FETCH_CATEGORIES_BEGIN":
            return { ...state, loading: true, error: null };
        case "FETCH_CATEGORIES_SUCCESS":
            return { ...state, loading: false, categories: action.payload.categories };
        case "FETCH_CATEGORIES_FAILURE":
            return { ...state, loading: false, error: action.payload.error };
        default: return state;
    }
}