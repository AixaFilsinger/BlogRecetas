import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const cerrarSesion = () => {
    //borrar del local
    localStorage.removeItem("usuario");
    setUsuarioLogueado({});
    navegacion("/");
  };

  return (
    <Navbar expand="lg"  data-bs-theme="light" className="navmenu">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Blog de recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-item nav-link" to={"/"}>
              Inicio
            </NavLink>
            {usuarioLogueado.email ? (
              <>
                <NavLink
                  end
                  className="nav-item nav-link"
                  to={"/administrador"}
                >
                  Administrador
                </NavLink>
                <Button variant="secondary" onClick={cerrarSesion}>Cerrar sesión</Button>
              </>
            ) : (
              <NavLink end className="nav-item nav-link" to={"/login"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
