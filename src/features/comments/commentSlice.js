import { COMMENTS } from '../../app/shared/COMMENTS';
import { createSlice } from '@reduxjs/toolkit';

/* The function is taking a parameter of campsiteId. In the body, return a new array filtering the COMMENTS array
for only the comments with the campsiteId property that matches the campsite ID that was passes in as an argument.
And make sure to convert the campsite ID to an integer since it will be passed in as a string.
export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};*/

const initialState = {
    commentsArray: COMMENTS
};
/* The function requires an object as an argument and it will return an object as its return value.
The object that we pass to it as an argument is what is called a configuration object. Meaning an object
containing information about how to configure something. In this case we are configuring a slicce 
of a global state date.*/
const commentsSlice = createSlice({
    name: 'comments',
    initialState
});

export const commentsReducer = commentsSlice.reducer; //slice reducer

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};