import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Label
} from "reactstrap";

import { CardSocial, InfoArea, Button } from "components";

import bgImage from "assets/img/bg16.jpg";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="full-page-content">
          <div className="register-page">
            <Container>
              <Row className="justify-content-center">
                <Col lg={5} md={8} xs={12} className="mt-5">
                  <InfoArea
                    icon="now-ui-icons media-2_sound-wave"
                    iconColor="primary"
                    title="Marketing"
                    titleColor="info"
                    description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                  />
                  <InfoArea
                    icon="now-ui-icons media-1_button-pause"
                    iconColor="primary"
                    title="Fully Coded in React 16"
                    titleColor="info"
                    description="We've developed the website with React 16, HTML5 and CSS3. The client has access to the code using GitHub."
                  />
                  <InfoArea
                    icon="now-ui-icons users_single-02"
                    iconColor="info"
                    title="Built Audience"
                    titleColor="info"
                    description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                  />
                </Col>
                <Col lg={4} md={8} xs={12}>
                  <Card className="card-signup">
                    <CardHeader className="text-center">
                      <CardTitle>Register</CardTitle>
                      <CardSocial
                        description=" or be classical "
                        socials={[
                          { name: "twitter" },
                          { name: "dribbble" },
                          { name: "facebook" }
                        ]}
                      />
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <InputGroup
                          className={
                            this.state.firstnameFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon>
                            <i className="now-ui-icons users_circle-08" />
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="First Name..."
                            onFocus={e =>
                              this.setState({ firstnameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ firstnameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={
                            this.state.lastnameFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon>
                            <i className="now-ui-icons text_caps-small" />
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Last Name..."
                            onFocus={e =>
                              this.setState({ lastnameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ lastnameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={
                            this.state.emailFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon>
                            <i className="now-ui-icons ui-1_email-85" />
                          </InputGroupAddon>
                          <Input
                            type="email"
                            placeholder="Email..."
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" {...this.props.inputProps} />
                            <span className="form-check-sign" />
                            <div>
                              I agree to the{" "}
                              <a href="#something">terms and conditions</a>.
                            </div>
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button color="primary" size="lg" round href="#pablo">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div
          className="full-page-background"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        />
      </div>
    );
  }
}

export default RegisterPage;
