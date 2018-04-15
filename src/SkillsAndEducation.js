import React from 'react';
import './App.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class SkillsAndEducation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <h1 className="welcomeHeader headerMargin">My Skills and Education</h1>
        <Nav tabs className="font">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              My Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              My Skills and Traits
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h3 className="font pt-2">Although I didn't go to uni, I still have a solid portfolio of qualifications...</h3>
                <h4 className="font">Qualifications at Questor:</h4>
                <p className="font">Apprenticeship in Level 2 Marketing</p>
                <h4 className="font">Qualifications at A-Level (The Thomas Aveling School):</h4>
                <ul className="font">
                  <li>BTEC Level 3 Subsidiary Diploma in IT- 2 Distinction’s</li>
                  <li>BTEC Level 3 Subsidiary Diploma in Sport- 1 Distinction*</li>
                </ul>
                <h4 className="font">Qualifications at GCSE (The Thomas Aveling School):</h4>
                <p>12 GCSE's C grade and above (including Maths, English, Science and IT)</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h3 className="font pt-2">Throughout my years in school and in the workplace I have gained valuable skills...</h3>
                <ul className="font">
                  <li>Knowledge of HTML, CSS, Javascript, ReactJs, C#, SQL and MVC</li>
                  <li>Experience in the work place, working directly with senior developers.</li>
                  <li>Confident communicator and always motivated to get involved in a discussion.</li>
                  <li>Desire to seek new oppotunities and gain qualifications.</li>
                  <li>Dedicated to work overtime if projects need to be done.</li>
                </ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}


