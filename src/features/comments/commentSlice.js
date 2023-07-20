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
const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    //dispatching an action to update comments list by first implementing a case reducer.
    // written as a method of the reducer's object.
    addComment: (state, action) => { 
            console.log('add comment action.payload:', action.payload);
            console.log('add comment state.commentsArray:', state.commentsArray);
            const newComment = { //basic approach to add comment to the array, as long as nothing is removed.
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            //an immer will handle updating the state in an immutable way. Each function defined in the reducer
            //will also have a corresponding action creator function with the same function name.
            state.commentsArray.push(newComment);
        }    
    }       
});

export const commentsReducer = commentSlice.reducer; //slice reducer

export const { addComment } = commentSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};