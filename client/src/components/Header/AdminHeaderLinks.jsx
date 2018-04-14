import React, {Component} from 'react';
import {NavItem, Nav} from 'react-bootstrap';

class HeaderLinks extends Component {
  render() {

    return (<div>
      <Nav>
        <NavItem eventKey={1} href="#">
          <i className="fa fa-dashboard"></i>
          <p className="hidden-lg hidden-md">Dashboard</p>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={3} href="#">
          <i className="fa fa-search"></i>
          <p className="hidden-lg hidden-md">Search</p>
        </NavItem>
        <NavItem to="/maps">Logout</NavItem>
      </Nav>
    </div>);
  }
}

export default HeaderLinks;
