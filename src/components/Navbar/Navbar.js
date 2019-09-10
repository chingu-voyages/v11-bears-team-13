import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Menubar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Mauritius</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Beaches</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Hiking</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/Place">Popular Places</Link>
              </NavItem>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Language
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>English</DropdownItem>
                  <DropdownItem>French</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <p style={{ fontSize: "15px" }}>30&#8451; Mauritius</p>
              {/* <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.2em" }} /> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Menubar);
