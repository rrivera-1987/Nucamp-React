import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { Provider } from 'react-redux';
import { store } from './app/store';

/* The <Routes> component is used to group route components, and it will handle the logic to direct 
requests to different URL paths */
function App() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Header />
          <Routes> 
            <Route path='/' element={<HomePage/>} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='directory' element={<CampsitesDirectoryPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route 
                path='directory/:campsiteId'
                element={<CampsiteDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    );
}

export default App;
