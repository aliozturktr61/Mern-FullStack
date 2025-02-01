const postReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return { ...state, posts: action.payload };

        case "CREATE_POST":
            return { ...state, posts: [action.payload, ...state.posts] };

        case "UPDATE_POST":
            const updatedPosts = state.posts.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
            return { ...state, posts: updatedPosts };

        case "DELETE_POST":
            const filteredPosts = state.posts.filter((post) => post._id !== action.payload);
            return { ...state, posts: filteredPosts };

        default:
            return state;
    }
};

export default postReducer;