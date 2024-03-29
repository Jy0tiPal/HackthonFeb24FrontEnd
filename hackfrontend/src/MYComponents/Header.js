import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Sunbeam</Navbar.Brand>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/loglist">Logs</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="TimeSheet"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/AddLogs">AddLogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Verify Logs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Approve Logs</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;