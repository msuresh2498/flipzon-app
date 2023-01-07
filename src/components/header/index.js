import './header.css'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header =() => {
    return (
        <div className='header'>
            <Nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <span className="navbar-head" href="#">FlipZOn</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Nav.Item className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></Nav.Item>
                    </li>
                    <li className="nav-item">
                    <Nav.Item className="nav-link active" aria-current="page" href="#"><Link to="/card">Shop</Link></Nav.Item>
                    </li>
                </ul>
                </div>
                <button className='cartbutton'><Link to="/Cart"> <ShoppingCartIcon />Cart</Link></button>
            </div>
            </Nav>
        </div>
    )
}

export default Header;
