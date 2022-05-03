import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppBar({ ...props }) {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand>Looters</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link className="nav-link" to="leaderboard">
              Docs
            </Link>
            {/*<Link className="nav-link" to="simulation">
              Invesntment Simulation
  </Link>*/}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {/* <MetamaskConnector />*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
