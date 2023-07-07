import { COMMENTS } from '../../app/shared/COMMENTS';

/* The function is taking a parameter of campsiteId. In the body, return a new array filtering the COMMENTS array
for only the comments with the campsiteId property that matches the campsite ID that was passes in as an argument.
And make sure to convert the campsite ID to an integer since it will be passed in as a string. */
export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};