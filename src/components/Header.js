import { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import Logo from "../images/bigpoints_logo_pic_only.min.svg";

const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

//   const handleLogin = (e) => {
//     toggleModal;
//     loginUser({
//       username: username.value,
//       password: password.value,
//     });
//     e.preventDefault();
//   };

  const handleLogout = () => {
    props.logoutUser();
  };

  return (
    <>
      <Navbar className="navbar navbar-dark bg-dark mb-3" sticky="top" expand="md">
        <div className="container d-flex justify-content-between">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img src={Logo} height="30" width="41" alt="BigPoints" />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/sportEvents">
                  Veranstaltungen
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <div>
                <Button outline onClick={toggleModal}>
                  <span><FaSignInAlt /></span> Login
                </Button>
              </div>
            </NavItem>
          </Nav>
        </div>
      </Navbar>

      {/* <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="username">Benutzername</Label>
              <Input type="text" id="username" name="username" innerRef={(input) => (username = input)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Passwort</Label>
              <Input type="password" id="password" name="password" innerRef={(input) => (password = input)} />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" innerRef={(input) => (remember = input)} />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal> */}
    </>
  );
};

export default Header;
