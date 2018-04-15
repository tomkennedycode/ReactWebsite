import React, { Component } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class NavBar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  scrollToConnect() {
    scroll.scrollTo(285);
  }

  scrollToProjects() {
    scroll.scrollTo(470);
  }

  scrollToSkills() {
    scroll.scrollTo(1000);
  }

  render () {
    return (
      <Menu width={ 400 } bodyClassName={ "font" }>
        <a onClick={this.scrollToConnect} className="menu-item" >Connect With Me</a>
        <a onClick={this.scrollToProjects} className="menu-item" >My Projects</a>
        <a onClick={this.scrollToSkills} className="menu-item" >My Skills and Education</a>
      </Menu>
    );
  }
}