import React from "react";
import {Container} from "reactstrap";
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (<footer className={"footer" + (
        this.props.default
        ? " footer-default"
        : "")}>
      <Container fluid={this.props.fluid
          ? true
          : false}>
        <nav>
          <ul>
            <li>
              <a href="https://www.ucmerced.edu">UC Merced</a>
            </li>
            <li>
              <a href="http://sustainability.ucmerced.edu/">Sustainability</a>
            </li>
            <li>
              <a href="https://engineeringservicelearning.ucmerced.edu/">ENGSL</a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>);
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
