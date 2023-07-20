import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetails from '../features/campsites/CampsiteDetails';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    /* this should return to us the campsite object from the CAMPSITES.js array that matches the ID */
    const campsite = useSelector(selectCampsiteById(campsiteId)); 
    console.log('campsite:', campsite);

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetails campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;