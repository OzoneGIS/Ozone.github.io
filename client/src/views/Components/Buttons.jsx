import React from "react";
import {
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import { PanelHeader, Button } from "components";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Card>
            <Row>
              <Col xs={12} md={6}>
                <CardHeader>
                  <CardTitle>Pick your Color</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button>Default</Button>
                  <Button color="primary">Primary</Button>
                  <Button color="info">Info</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                </CardBody>
              </Col>
              <Col xs={12} md={6}>
                <CardHeader>
                  <CardTitle>Buttons with Label</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button leftLabel="now-ui-icons arrows-1_minimal-left">
                    Left
                  </Button>
                  <Button
                    color="primary"
                    rightLabel="now-ui-icons arrows-1_minimal-right"
                  >
                    Right
                  </Button>
                  <Button color="info" leftLabel="now-ui-icons travel_info">
                    Info
                  </Button>
                  <Button color="success" leftLabel="now-ui-icons ui-1_check">
                    Success
                  </Button>
                  <Button
                    color="warning"
                    leftLabel="now-ui-icons ui-2_time-alarm"
                  >
                    Warning
                  </Button>
                  <Button
                    color="danger"
                    leftLabel="now-ui-icons ui-1_simple-remove"
                  >
                    Danger
                  </Button>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <CardHeader>
                  <CardTitle>Pick your Size</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button color="primary" size="sm">
                    Small
                  </Button>
                  <Button color="primary">Normal</Button>
                  <Button color="primary" size="lg">
                    Large
                  </Button>
                </CardBody>
              </Col>
              <Col xs={12} md={6}>
                <CardHeader>
                  <CardTitle>Pick your Style</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button color="primary">Default</Button>
                  <Button color="primary" round>
                    Round
                  </Button>
                  <Button color="primary" round>
                    <i className="now-ui-icons ui-2_favourite-28" /> with icon
                  </Button>
                  <Button color="primary" round icon>
                    <i className="now-ui-icons ui-2_favourite-28" />
                  </Button>
                  <Button color="primary" simple>
                    Simple
                  </Button>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <CardHeader>
                  <CardTitle>Pagination</CardTitle>
                </CardHeader>
                <CardBody>
                  <Pagination>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                  </Pagination>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Col>
              <Col md={6} xs={12}>
                <CardHeader>
                  <CardTitle>Button Group</CardTitle>
                </CardHeader>
                <CardBody>
                  <ButtonGroup>
                    <Button color="info">Left</Button>
                    <Button color="info">Middle</Button>
                    <Button color="info">Right</Button>
                  </ButtonGroup>
                  <br />
                  <br />
                  <ButtonToolbar>
                    <ButtonGroup>
                      <Button round color="info">
                        1
                      </Button>
                      <Button round color="info">
                        2
                      </Button>
                      <Button round color="info">
                        3
                      </Button>
                      <Button round color="info">
                        4
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button round color="info">
                        5
                      </Button>
                      <Button round color="info">
                        6
                      </Button>
                      <Button round color="info">
                        7
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <CardHeader>
                  <CardTitle>Social buttons</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <p className="category">Default</p>
                      <Button twitter>
                        <i className="fa fa-twitter" /> Tweet
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <p className="category">Icon</p>
                      <Button icon twitter>
                        <i className="fa fa-twitter" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <p className="category">Icon Round</p>
                      <Button icon round twitter>
                        <i className="fa fa-twitter" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <p className="category">Icon Neutral</p>
                      <Button icon neutral twitter>
                        <i className="fa fa-twitter" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <p className="category">Neutral</p>
                      <Button neutral twitter>
                        <i className="fa fa-twitter" /> Tweet
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button facebook>
                        <i className="fa fa-facebook-square" /> Share
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon facebook>
                        <i className="fa fa-facebook"> </i>
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round facebook>
                        <i className="fa fa-facebook"> </i>
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral facebook>
                        <i className="fa fa-facebook-square"> </i>
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral facebook>
                        <i className="fa fa-facebook-square" /> Share
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button google>
                        <i className="fa fa-google-plus-square" /> Share on
                        Google+
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon google>
                        <i className="fa fa-google-plus"> </i>
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round google>
                        <i className="fa fa-google-plus"> </i>
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral google>
                        <i className="fa fa-google-plus"> </i>
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral google>
                        <i className="fa fa-google-plus-square" /> Share on
                        Google+
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button linkedin>
                        <i className="fa fa-linkedin-square" /> Connect with
                        Linkedin
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon linkedin>
                        <i className="fa fa-linkedin-square" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round linkedin>
                        <i className="fa fa-linkedin-square" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral linkedin>
                        <i className="fa fa-linkedin-square" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral linkedin>
                        <i className="fa fa-linkedin-square" /> Connect with
                        Linkedin
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button pinterest>
                        <i className="fa fa-pinterest" /> Pint it
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon pinterest>
                        <i className="fa fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round pinterest>
                        <i className="fa fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral pinterest>
                        <i className="fa fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral pinterest>
                        <i className="fa fa-pinterest" /> Pint it
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button youtube>
                        <i className="fa fa-youtube-play" /> View on Youtube
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon youtube>
                        <i className="fa fa-youtube" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round youtube>
                        <i className="fa fa-youtube" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral youtube>
                        <i className="fa fa-youtube" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral youtube>
                        <i className="fa fa-youtube-play" /> View on Youtube
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button tumblr>
                        <i className="fa fa-tumblr-square" /> Repost
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon tumblr>
                        <i className="fa fa-tumblr-square" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round tumblr>
                        <i className="fa fa-tumblr-square" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral tumblr>
                        <i className="fa fa-tumblr-square" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral tumblr>
                        <i className="fa fa-tumblr-square" /> Repost
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button github>
                        <i className="fa fa-github" /> Connect with Github
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon github>
                        <i className="fa fa-github" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round github>
                        <i className="fa fa-github" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral github>
                        <i className="fa fa-github" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral github>
                        <i className="fa fa-github" /> Connect with Github
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button behance>
                        <i className="fa fa-behance-square" /> Follow us
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon behance>
                        <i className="fa fa-behance-square" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round behance>
                        <i className="fa fa-behance-square" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral behance>
                        <i className="fa fa-behance-square" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral behance>
                        <i className="fa fa-behance-square" /> Follow us
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button dribbble>
                        <i className="fa fa-dribbble" /> Find us on Dribbble
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon dribbble>
                        <i className="fa fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round dribbble>
                        <i className="fa fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral dribbble>
                        <i className="fa fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral dribbble>
                        <i className="fa fa-dribbble" /> Find us on Dribbble
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4} sm={5} xs={12}>
                      <Button reddit>
                        <i className="fa fa-reddit" /> Repost
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon reddit>
                        <i className="fa fa-reddit" />
                      </Button>
                    </Col>
                    <Col md={1} sm={1} xs={12}>
                      <Button icon round reddit>
                        <i className="fa fa-reddit" />
                      </Button>
                    </Col>
                    <Col md={2} sm={1} xs={12}>
                      <Button icon neutral reddit>
                        <i className="fa fa-reddit" />
                      </Button>
                    </Col>
                    <Col md={3} sm={4} xs={12}>
                      <Button neutral reddit>
                        <i className="fa fa-reddit" /> Repost
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export default Buttons;
