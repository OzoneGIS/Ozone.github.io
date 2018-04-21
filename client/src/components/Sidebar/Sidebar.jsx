import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Collapse } from "reactstrap";
import NotificationAlert from "react-notification-alert";
import PerfectScrollbar from "perfect-scrollbar";

import { Button } from "components";

import logo from "logo-white.svg";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openComponents: this.activeRoute("/components") !== "" ? true : false,
      openMaps: this.activeRoute("/maps") !== "" ? true : false
    };
    this.activeRoute.bind(this);
    this.minimizeSidebar = this.minimizeSidebar.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  minimizeSidebar() {
    var message = "Sidebar mini ";
    if (document.body.classList.contains("sidebar-mini")) {
      message += "deactivated...";
    } else {
      message += "activated...";
    }
    document.body.classList.toggle("sidebar-mini");
    var options = {};
    options = {
      place: "tr",
      message: message,
      type: "info",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div>
        <NotificationAlert ref="notificationAlert" />
        <div className="sidebar" data-color="blue">
          <div className="logo">
            <a
              href="https://www.creative-tim.com"
              className="simple-text logo-mini"
            >
              <div className="logo-img">
                <img src={logo} alt="react-logo" />
              </div>
            </a>
            <a
              href="https://www.creative-tim.com"
              className="simple-text logo-normal"
            >
              Creative Tim
            </a>
            <div className="navbar-minimize">
              <Button
                simple
                neutral
                icon
                round
                id="minimizeSidebar"
                onClick={this.minimizeSidebar}
              >
                <i className="now-ui-icons text_align-center visible-on-sidebar-regular" />
                <i className="now-ui-icons design_bullet-list-67 visible-on-sidebar-mini" />
              </Button>
            </div>
          </div>

          <div className="sidebar-wrapper" ref="sidebar">
            <Nav>
              {this.props.routes.map((prop, key) => {
                if (prop.redirect) return null;
                if (prop.collapse) {
                  var st = {};
                  st[prop["state"]] = !this.state[prop.state];
                  return (
                    <li className={this.activeRoute(prop.path)} key={key}>
                      <a
                        data-toggle="collapse"
                        aria-expanded={this.state[prop.state]}
                        onClick={() => this.setState(st)}
                      >
                        <i className={"now-ui-icons " + prop.icon} />
                        <p>
                          {prop.name}
                          <b className="caret" />
                        </p>
                      </a>
                      <Collapse isOpen={this.state[prop.state]}>
                        <ul className="nav">
                          {prop.views.map((prop, key) => {
                            if (prop.redirect) return null;
                            return (
                              <li
                                className={this.activeRoute(prop.path)}
                                key={key}
                              >
                                <NavLink
                                  to={prop.path}
                                  activeClassName="active"
                                >
                                  <span className="sidebar-mini-icon">
                                    {prop.mini}
                                  </span>
                                  <span className="sidebar-normal">
                                    {prop.name}
                                  </span>
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </Collapse>
                    </li>
                  );
                }
                return (
                  <li className={this.activeRoute(prop.path)} key={key}>
                    <NavLink
                      to={prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={"now-ui-icons " + prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
