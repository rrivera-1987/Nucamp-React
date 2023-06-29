import HeartLogo from './heart.svg';
import './App.css';

const message = 'cool cud';

const Heart = (props) => {
  return (
    <div className='heart'>
        <img className='heart-img' src={HeartLogo} alt='heart' />
        <p className='heart-message'>{props.msg}</p>
    </div>
  )
};

function App() {
  return <Heart msg={message} />;
}

export default App;
