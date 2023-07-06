import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetails from '../features/campsites/CampsiteDetails'

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    /* this should return to us the campsite object from the CAMPSITES.js array that matches the ID */
    const campsite = selectCampsiteById(campsiteId); 

    return (
        <Container>
            <Row>
                <CampsiteDetails campsite={campsite} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;