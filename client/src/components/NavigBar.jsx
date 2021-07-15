import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigBar = () => {
  return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            <Link className="nav-link" aria-current="page" to="/">
              <img src="/blog.svg" className="d-inline-block align-top" alt="" height="35" />
            <span className="ps-3 text-white">Tech Science Reviews</span>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            
            <Nav>
              <Nav.Link >
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" aria-current="page" to="/create">New Blog</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" aria-current="page" to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default NavigBar
