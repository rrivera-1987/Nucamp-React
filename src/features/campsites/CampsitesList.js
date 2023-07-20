import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';
import { useSelector } from 'react-redux';

/*const CampsitesList = () => {
    const campsites =  selectAllCampsites();*/
// We remove the parenthesis from selectAllCampsites because we want to pass only the function name.
// We don't want to pass its value to useSelector. We want to pass the function itself without invoking it.
const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);

    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;