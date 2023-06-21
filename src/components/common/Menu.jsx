import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
    return (
        <Navbar expand="lg" bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>Blog de recetas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end className="nav-item nav-link" to={'/'}>Inicio</NavLink>
              <NavLink end className="nav-item nav-link" to={'/registro'}>Registro</NavLink>
              {
                usuarioLogueado.email ?(
                  <>
                  <NavLink end className="nav-item nav-link" to={'/administrador'}>Administrador</NavLink>
                 <Button variant="secondary">Cerrar sesión</Button>
                  </>
                
                ):<NavLink end className="nav-item nav-link" to={'/login'}>Login</NavLink>
              }
              
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;