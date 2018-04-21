import React, { Component } from "react";
import { Col } from "reactstrap";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

import { PanelHeader } from "components";

import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";

var steps = [
  { stepName: "About", component: Step1 },
  { stepName: "Account", component: Step2 },
  { stepName: "Address", component: Step3 }
];

class Wizard extends Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Col xs={12} md={10} className="mr-auto ml-auto">
            <ReactWizard
              steps={steps}
              navSteps
              validate
              title="Build Your Profile"
              subtitle="This information will let us know more about you."
              headerTextCenter
              color="blue"
            />
          </Col>
        </div>
      </div>
    );
  }
}

export default Wizard;
