import Nav from 'react-bootstrap/Nav';
import './footer.css';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/"><HomeIcon/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/card'><AddShoppingCartIcon/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><InstagramIcon/></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Footer;