import { Container, Row, Col, Button } from 'reactstrap'; // similar to bootstrap
import CampsiteDetails from '../features/campsites/CampsiteDetails';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();

    const toggleCampsite = () => {
        selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite)
    };

    return (
        <Container>
            <Button onClick={() => toggleCampsite()}>
                Select Random Campsite
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='5' md='5'>
                    <CampsiteDetails campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;