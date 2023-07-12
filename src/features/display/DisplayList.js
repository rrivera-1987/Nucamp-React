import { Col, Row } from 'reactstrap';
//import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/PromotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];
    /* If the data ever changes in the campsite.js or promotions.js, we don't have to change this file
    becuause it is now retrieving the data at runtime, instead of having it hard coded. */
    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='ms-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;