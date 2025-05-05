export const ADD_POST = 'ADD_POST';
export const FETCH_POST = 'FETCH_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post
});

export const fetchPost = () => ({
    type: FETCH_POST,

});

export const updatePost = (id, updatedPost) => ({
    type: UPDATE_POST,
    payload: { id, updatedPost },
});

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
});