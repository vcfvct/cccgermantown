import React = require("react");
import Link from 'gatsby-link'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink } from "react-router-dom";

interface State {
  isOpen: boolean;
}
export default class MainNav extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  public render() {
    return (
      <Container>

        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <img src="https://s3.amazonaws.com/cccg-media/site-images/cccg-logo-72x385.png" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">主页</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  关于我们
              </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    <Link to="/about" className="nav-link">教会简介</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/about-church" className="nav-link">教会体制</Link>
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>

      // <div
      //   style={{
      //     background: 'rebeccapurple',
      //     marginBottom: '1.45rem',
      //   }}
      // >
      //   <div
      //     style={{
      //       margin: '0 auto',
      //       maxWidth: 960,
      //       padding: '1.45rem 1.0875rem',
      //     }}
      //   >
      //     <div style={{ margin: 0 }}>
      //       <Link
      //         to="/"
      //         style={{
      //           color: 'white',
      //           textDecoration: 'none',
      //           marginRight: '10px'
      //         }}
      //       >
      //         Home
      //   </Link>
      //       <Link
      //         to="/about"
      //         style={{
      //           color: 'white',
      //           textDecoration: 'none',
      //         }}
      //       >
      //         About
      //   </Link>
      //     </div>
      //   </div>
      // </div>
    );
  }
}