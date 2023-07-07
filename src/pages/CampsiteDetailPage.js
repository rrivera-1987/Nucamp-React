import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetails from '../features/campsites/CampsiteDetails';
import CommentsList from '../features/comments/CommentsList';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    /* this should return to us the campsite object from the CAMPSITES.js array that matches the ID */
    const campsite = selectCampsiteById(campsiteId); 

    return (
        <Container>
            <Row>
                <CampsiteDetails campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;