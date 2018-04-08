import React, { Component } from 'react';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class NavBar extends Component {

      constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

      scrollTo() {
        scroll.scrollTo(1000);
      }

      render() {
        return (
          <div className="mx-auto">
            <Navbar color="faded" light className="navBarStyle">
              <NavbarBrand href="/" className="mr-auto header font">Tom Kennedy</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink onClick={this.scrollTo} className="font">Connect With Me</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.scrollTo} className="font">My Projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.scrollTo} className="font">My Skills and Education</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
    );
  }
}
