import React, {Component} from 'react';
import {NavItem, Nav} from 'react-bootstrap';

class HeaderLinks extends Component {

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1
      ? 'active'
      : '';
  }

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
        <NavItem href='/admin'>Login</NavItem>
      </Nav>
    </div>);
  }
}

export default HeaderLinks;
