import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({campsite}) => {  //to destructure an object, list the keys in curly braces, and assign them to the object name.
    //destructuring props by creating destructuring assignment and unpacking props.
    // const { campsite } = props; with this, we dont have to write props for campsite.
    const { id, image, name } = campsite; // this is the common way to destructure props.
    return ( /* Add a 'to' prop to pass the id that we destructured from CAMPSITE to this prop.
    'to' prop will expect a string as it's value, but it is an Integer. One way of doing this is to use Template Literal
    syntax. */
        <Link to={`${id}`}> 
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
};

export default CampsiteCard;