import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carrito from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">
          <Link to={"/"}>El Tero</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to={"/productos"}>Carta</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to={"/category/Las Nuestras"}>Las Nuestras</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to={"/category/Las De Siempre"}>Las De Siempre</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to={"/category/Clientes"}>Clientes</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to={"/contacto"}>Contacto</Link>
        </Nav>
        <Carrito />
      </Container>
    </Navbar>
  );
}

export default NavBar;
