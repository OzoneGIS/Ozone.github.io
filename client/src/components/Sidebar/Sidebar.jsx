import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {NavItem, Nav} from 'react-bootstrap';

import imagine from 'assets/img/newBeginnings-5.jpg';
import logo from 'assets/img/reactlogo.png';

import appRoutes from 'routes/app.jsx';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1
      ? 'active'
      : '';
  }
  updateDimensions() {
    this.setState({width: window.innerWidth});
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: 'url(' + imagine + ')'
    };
    return (<div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
      <div className="sidebar-background" style={sidebarBackground}></div>
      <div className="logo">
        <a className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="logo_image"/>
          </div>

        </a>
        <a href="https://adriandarian.github.io/sustainable" className="simple-text logo-normal">
          Ozone
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {
            this.state.width <= 991
              ? (<Nav>
                <NavItem eventKey={3} href="#">
                  <i className="fa fa-search"></i>
                  <p className="hidden-lg hidden-md">Search</p>
                </NavItem>
                <NavItem href='/'>Login</NavItem>
              </Nav>)
              : null
          }
          {
            appRoutes.map((prop, key) => {
              if (!prop.redirect)
                return (<li className={prop.upgrade
                    ? "active active-pro"
                    : this.activeRoute(prop.path)} key={key}>
                  <NavLink to={prop.path} className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'rgb(126, 212, 145)'}} >
                    <i className={prop.icon} style={{width: '28px', height: '28px'}}></i>
                    <p>{prop.name}</p>
                  </NavLink>
                </li>);
              return null;
            })
          }
        </ul>
      </div>
    </div>);
  }
}

export default Sidebar;
