import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = ({campsite}) => {  //to destructure an object, list the keys in curly braces, and assign them to the object name.
    //destructuring props by creating destructuring assignment and unpacking props.
    // const { campsite } = props; with this, we dont have to write props for campsite.
    const { image, name } = campsite; // this is the common way to destructure props.
    return (
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
    )
};

export default CampsiteCard;