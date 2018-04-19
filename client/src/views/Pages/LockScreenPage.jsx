import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Container,
  Col,
  FormGroup,
  Input
} from "reactstrap";

import { Button } from "components";

import avatar from "assets/img/eva.jpg";

import bgImage from "assets/img/bg13.jpg";

class LockScreenPage extends React.Component {
  render() {
    return (
      <div>
        <div className="full-page-content">
          <div className="lock-page">
            <Container>
              <Col lg={4} md={8} xs={12} className="mr-auto ml-auto">
                <Card className="card-lock text-center">
                  <CardHeader>
                    <img src={avatar} alt="avatar-img" />
                  </CardHeader>
                  <CardBody>
                    <CardTitle>Joe Gardner</CardTitle>
                    <FormGroup>
                      <Input type="password" placeholder="Enter Password..." />
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" size="lg" round>
                      Unlock
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
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

export default LockScreenPage;
