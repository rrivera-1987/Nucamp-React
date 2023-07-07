import { formatDate } from '../../utils/formatDate';

const Comment =  ({ comment }) => {
    const { text: commentText, rating, author, date } = comment;

/* when destructuring the properties from an object like in the parameter list, you can optionally specify a different variable
name to use. You can add a colon, in this case to the text property. */
    return (
        <p>
            {commentText}
            <br />
            {rating}/5 stars -- {author}, {formatDate(date)} 
        </p>
    );
};

export default Comment;