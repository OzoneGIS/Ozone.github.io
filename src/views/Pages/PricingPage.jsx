import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

import { CardIcon, Button } from "components";

import bgImage from "assets/img/bg15.jpg";

class Pricing extends React.Component {
  render() {
    return (
      <div>
        <div className="full-page-content">
          <div className="pricing-page">
            <Container>
              <Row>
                <Col xs={12} md={6} className="ml-auto mr-auto text-center">
                  <h2 className="title">Pick the best plan for you</h2>
                  <h5 className="description">
                    You have Free Unlimited Updates and Premium Support on each
                    package.
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <Card className="card-pricing card-plain">
                    <h6 className="card-category"> Bravo Pack</h6>
                    <CardBody>
                      <CardIcon
                        color="warning"
                        icon="now-ui-icons media-1_button-power"
                      />
                      <CardTitle tag="h3">10$</CardTitle>
                      <ul>
                        <li>Complete documentation</li>
                        <li>Working materials in Sketch</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button href="#pablo" color="warning" neutral round>
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card className="card-pricing">
                    <h6 className="card-category"> Alpha Pack</h6>
                    <CardBody>
                      <CardIcon
                        color="primary"
                        icon="now-ui-icons objects_diamond"
                      />
                      <CardTitle tag="h3">69$</CardTitle>
                      <ul>
                        <li>Working materials in EPS</li>
                        <li>6 months access to the library</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button href="#pablo" color="primary" round>
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card className="card-pricing card-plain">
                    <h6 className="card-category"> Charlie Pack</h6>
                    <CardBody>
                      <CardIcon
                        color="success"
                        icon="now-ui-icons media-2_sound-wave"
                      />
                      <CardTitle tag="h3">69$</CardTitle>
                      <ul>
                        <li>Working materials in PSD</li>
                        <li>1 year access to the library</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button href="#pablo" color="success" neutral round>
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card className="card-pricing card-plain">
                    <h6 className="card-category"> Extra Pack</h6>
                    <CardBody>
                      <CardIcon
                        color="danger"
                        icon="now-ui-icons education_atom"
                      />
                      <CardTitle tag="h3">159$</CardTitle>
                      <ul>
                        <li>Complete documentation</li>
                        <li>2GB cloud storage</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button href="#pablo" color="danger" neutral round>
                        Add to Cart
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

export default Pricing;
