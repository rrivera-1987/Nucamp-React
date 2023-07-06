import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

/* The <Routes> component is used to group route components, and it will handle the logic to direct 
requests to different URL paths */
function App() {
    return (
      <div className='App'>
        <Header />
        <Routes> 
          <Route path='/' element={<HomePage/>} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
        </Routes>
        <Footer />                 
      </div>
    );
}

export default App;
