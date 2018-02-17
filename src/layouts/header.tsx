import React = require("react");
import Link from 'gatsby-link'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink } from "react-router-dom";

// import './header.scss'
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
        <header className="site-header">
          <div className="container">
            <a href="#" className="branding">
              <img src="https://s3.amazonaws.com/cccg-media/site-images/cccg-logo-72x385.png" alt="logo" className="logo" />
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
    );
  }
}