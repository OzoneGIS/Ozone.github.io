import React, {Component} from 'react';
import {NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

class HeaderLinks extends Component {
  render() {

    return (<div>
      <Nav>
        <NavItem eventKey={1} href="#">
          <i className="fa fa-dashboard"></i>
          <p className="hidden-lg hidden-md">Dashboard</p>
        </NavItem>
      </Nav>
      <Nav pullRight="pullRight">
        <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown-right">
          <MenuItem eventKey={2.1}>Action</MenuItem>
          <MenuItem eventKey={2.2}>Another action</MenuItem>
          <MenuItem eventKey={2.3}>Something</MenuItem>
          <MenuItem eventKey={2.4}>Another action</MenuItem>
          <MenuItem eventKey={2.5}>Something</MenuItem>
          <MenuItem divider="divider"/>
          <MenuItem eventKey={2.5}>Separated link</MenuItem>
        </NavDropdown>
        <NavItem eventKey={3} href="#">
          <i className="fa fa-search"></i>
          <p className="hidden-lg hidden-md">Search</p>
        </NavItem>
        <NavItem eventKey={1} href="#">Account</NavItem>
      </Nav>
    </div>);
  }
}

export default HeaderLinks;
