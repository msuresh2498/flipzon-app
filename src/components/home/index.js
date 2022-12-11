import { Link } from 'react-router-dom';
import  './home.css';

const Home =() => {
    return (
        <div className="Home">
          <div className='Hometext'><Link to="/card"> FlipZOn</Link></div>
          <p>Starting From 499/-Rs</p>
        </div>
    )
}

export default Home;
