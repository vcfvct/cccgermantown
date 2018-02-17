import React = require("react");
import Link from 'gatsby-link'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import './header.css'
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

        {/* <Navbar color="faded" light expand="md">
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
        </Navbar> */}
        <header className="site-header">
          <div className="container">
            <a href="#" className="branding">
              <img src="images/logo-cccg.png" alt="" className="logo" />
            </a>

            <div className="main-navigation">
              <button className="menu-toggle"><i className="fa fa-bars"></i> Menu</button>
              <ul className="menu">
                <li className="menu-item current-menu-item"> <Link to="/" className="nav-link">主页 <small>Homepage</small></Link></li>
                <li className="menu-item"><Link to="/about" className="nav-link">教会简介<small>About Us</small></Link></li>
                <li className="menu-item"><a href="seremons.html">活动与通讯 <small>Activities</small></a></li>
                <li className="menu-item"><a href="events.html">教会事工 <small>Sunt in culpa</small></a></li>
                <li className="menu-item"><a href="families.html">多媒体文档 <small>Multimedia</small></a></li>
                <li className="menu-item"><a href="#">联系我们 <small>Contact US</small></a></li>
              </ul>
            </div>
            <div className="mobile-navigation"></div>
          </div>
        </header>
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