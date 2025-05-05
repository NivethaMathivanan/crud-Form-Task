import { ADD_POST, FETCH_POST, UPDATE_POST, DELETE_POST } from './Action';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case FETCH_POST:
      return {
        ...state,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post, index) =>
          index === action.payload.id ? action.payload.updatedPost : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
