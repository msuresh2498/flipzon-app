import './header.css'
import { Link } from 'react-router-dom';

const Header =() => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <span className="navbar-head" href="#">FlipZOn</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><Link to="/card">Shop</Link></a>
                    </li>
                </ul>
                </div>
                <button className='cartbutton'><Link to="/Cart"> Add to Cart</Link></button>
            </div>
            </nav>
        </div>
    )
}

export default Header;
