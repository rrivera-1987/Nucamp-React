import { Container } from 'reactstrap'; // similar to bootstrap
import CampsitesList from '../features/campsites/CampsitesList';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;