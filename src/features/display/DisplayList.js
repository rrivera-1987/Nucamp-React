import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/PromotionsSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion()];
    /* If the data ever changes in the campsite.js or promotions.js, we don't have to change this file
    becuause it is now retrieving the data at runtime, instead of having it hard coded. */
    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='ms-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                )
            })}
        </Row>
    )
};

export default DisplayList;