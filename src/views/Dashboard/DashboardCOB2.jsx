import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col
} from "reactstrap";

import {Line} from "react-chartjs-2";

import {PanelHeader, Stats, Statistics, CardCategory} from "components";

import {dashboardCOB2ElectricityChart, dashboardCOB2WaterUsageChart, dashboardCOB2GasChart} from "variables/charts.jsx";


class DashboardCOB2 extends React.Component {

  render() {
    return (<div>
      <PanelHeader size="lg" content={<Line
        data = {
          dashboardCOB2ElectricityChart.data
        }
        options = {
          dashboardCOB2ElectricityChart.options
        }
        />}/>
      <div className="content">
        <Row>
          <Col xs={6} md={12}>
            <Card className="card-stats card-raised">
              <CardBody>
                <Row>
                  <Col xs={12} md={4}>
                    <Statistics iconState="primary" icon="fas fa-certificate" title="Platinum" subtitle="LEED Certification"/>
                  </Col>
                  <Col xs={12} md={4}>
                    <Statistics iconState="success" icon="fas fa-building" title="2016" subtitle="Built"/>
                  </Col>
                  <Col xs={12} md={4}>
                    <Statistics iconState="info" icon="fab fa-laravel" title="84,144 sq ft" subtitle="Area of Building"/>
                  </Col>

                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className="card-chart">
              <CardHeader>
                <CardCategory><b>Water Usage</b></CardCategory>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={dashboardCOB2WaterUsageChart.data} options={dashboardCOB2WaterUsageChart.options}/>
                </div>
              </CardBody>
              <CardFooter>
                <Stats>
                  {
                    [
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Updated Yesterday"
                      }
                    ]
                  }
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="card-chart">
              <CardHeader>
                <CardCategory><b>Natural Gas</b></CardCategory>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={dashboardCOB2GasChart.data} options={dashboardCOB2GasChart.options}/>
                </div>
              </CardBody>
              <CardFooter>
                <Stats>
                  {
                    [
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Updated Yesterday"
                      }
                    ]
                  }
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </div>);
  }
}

export default DashboardCOB2;
