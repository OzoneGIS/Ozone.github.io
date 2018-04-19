import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

import {
  PanelHeader,
  Stats,
  Statistics,
  CardCategory,
  Progress
} from "components";

import {
  dashboardPanelChart,
  dashboardActiveUsersChart,
  dashboardSummerChart,
  dashboardActiveCountriesCard
} from "variables/charts.jsx";

import jacket from "assets/img/saint-laurent.jpg";
import shirt from "assets/img/balmain.jpg";
import swim from "assets/img/prada.jpg";

import { table_data } from "variables/general.jsx";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class Dashboard extends React.Component {
  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag" />
            </div>
          </td>
          <td>{table_data[i].country}</td>
          <td className="text-right">{table_data[i].count}</td>
          <td className="text-right">{table_data[i].percentage}</td>
        </tr>
      );
    }
    return tableRows;
  }
  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <Card className="card-stats card-raised">
                <CardBody>
                  <Row>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="primary"
                        icon="ui-2_chat-round"
                        title="859"
                        subtitle="Messages"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="success"
                        icon="business_money-coins"
                        title={
                          <span>
                            <small>$</small>3,521
                          </span>
                        }
                        subtitle="Today Revenue"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="info"
                        icon="users_single-02"
                        title="562"
                        subtitle="Customers"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="danger"
                        icon="objects_support-17"
                        title="353"
                        subtitle="Support Requests"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Active Users</CardCategory>
                  <CardTitle tag="h2">34,252</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardActiveUsersChart.data}
                      options={dashboardActiveUsersChart.options}
                    />
                  </div>
                  <Table responsive>
                    <tbody>{this.createTableData()}</tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Summer Email Campaign</CardCategory>
                  <CardTitle tag="h2">55,300</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardSummerChart.data}
                      options={dashboardSummerChart.options}
                    />
                  </div>
                  <div className="card-progress">
                    <Progress badge="Delivery Rate" value="90" />
                    <Progress color="success" badge="Open Rate" value="60" />
                    <Progress color="info" badge="Click Rate" value="12" />
                    <Progress color="primary" badge="Hard Bounce" value="5" />
                    <Progress color="danger" badge="Spam Report" value="0.11" />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Active Countries</CardCategory>
                  <CardTitle tag="h2">105</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardActiveCountriesCard.data}
                      options={dashboardActiveCountriesCard.options}
                    />
                  </div>
                  <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "280px"
                    }}
                    containerClassName="map"
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      }
                    }}
                    series={{
                      regions: [
                        {
                          values: mapData,
                          scale: ["#AAAAAA", "#444444"],
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days" }]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Best Selling Products</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive className="table-shopping">
                    <thead>
                      <tr>
                        <th className="text-center" />
                        <th>PRODUCT</th>
                        <th>COLOR</th>
                        <th>Size</th>
                        <th className="text-right">PRICE</th>
                        <th className="text-right">QTY</th>
                        <th className="text-right">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={jacket} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#jacket">Suede Biker Jacket</a>
                          <br />
                          <small>by Saint Laurent</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>3,390
                        </td>
                        <td className="td-number">1</td>
                        <td className="td-number">
                          <small>€</small>549
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={shirt} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#shirt">Jersey T-Shirt</a>
                          <br />
                          <small>by Balmain</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>499
                        </td>
                        <td className="td-number">2</td>
                        <td className="td-number">
                          <small>€</small>998
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={swim} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pants">Slim-Fit Swim Short </a>
                          <br />
                          <small>by Prada</small>
                        </td>
                        <td>Red</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>200
                        </td>
                        <td className="td-number">3</td>
                        <td className="td-number">
                          <small>€</small>799
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5" />
                        <td className="td-total">Total</td>
                        <td className="td-price">
                          <small>€</small>2,346
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
