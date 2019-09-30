import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/fontawesome-free-solid";
import "./Navbar.css";

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
          <NavbarBrand href="/">
            <h2 className="logo">
              <span
                role="img"
                aria-label="palm tree"
                className="palm-tree-icon"
              >
                &#x1F334;
              </span>
              <span className="logo-first-letter letter-t">T</span>
              <span>raverse</span>
              &nbsp;
              <span className="logo-first-letter letter-m">M</span>
              <span>auritius</span>
            </h2>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem active>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/beaches/">Beaches</Link>
              </NavItem>
              <NavItem>
                <Link to="/hiking/">Hiking Trails</Link>
              </NavItem>
              <NavItem>
                <Link to="/place">Destinations</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  English
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>English</DropdownItem>
                  <DropdownItem>French</DropdownItem>
                  <DropdownItem>Hindi</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <form className="form-inline mx-2 search-bar">
                <label htmlFor="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="search"
                  />
                </label>
              </form>
              <div
                style={{
                  fontWeight: 800,
                  color: "#2F4858",
                  borderLeft: "1px solid #3C4A3E",
                  paddingLeft: "0.5rem"
                }}
              >
                <FontAwesomeIcon icon={faSun} style={{ color: "#E47600" }} />
                <span style={{ fontSize: "16px", marginLeft: "0.3rem" }}>
                  30
                  <span style={{ fontSize: "0.8rem" }}> &#8451;</span>
                </span>
                <p style={{ fontSize: "0.8rem", margin: 0 }}>Mauritius</p>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Menubar);
