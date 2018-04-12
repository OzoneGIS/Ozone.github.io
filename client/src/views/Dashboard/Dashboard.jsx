import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import {Grid, Row, Col} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales
} from 'variables/Variables.jsx';

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i}></i>);
      legend.push(" ");
      legend.push(json["names"][i]);
      legend.push(" ");
    }
    return legend;
  }
  render() {
    return (<div className="content">
      <Grid fluid="fluid">
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard bigIcon={<i className = "pe-7s-server text-warning" > </i>} statsText="LEED Certification" statsValue="Gold" statsIcon={<i className = "fa fa-refresh" > </i>} statsIconText="Last Day"/>
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard bigIcon={<i className = "pe-7s-study text-success" > </i>} statsText="Year Constructed" statsValue="2008" statsIcon={<i className = "fa fa-calendar-o" > </i>} statsIconText="Last day"/>
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard bigIcon={<i className = "pe-7s-add-user text-danger" > </i>} statsText="Number of Students" statsValue="7842" statsIcon={<i className = "fa fa-clock-o" > </i>} statsIconText="In the last hour"/>
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard bigIcon={<i className = "fa fa-home text-info" > </i>} statsText="Buildings" statsValue="20" statsIcon={<i className = "fa fa-refresh" > </i>} statsIconText="Updated now"/>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Card statsIcon="fa fa-history" id="chartHours" title="Efficiency Data: COB1" category="24 Hours performance" stats="Updated 3 minutes ago" content={<div className = "ct-chart" > <ChartistGraph data={dataSales} type="Line" options={optionsSales} responsiveOptions={responsiveSales}/>
            </div>} legend={<div className = "legend" > {
                this.createLegend(legendSales)
              }
              </div>
}/>
          </Col>
          <Col md={4}>
            <Card statsIcon="fa fa-clock-o" title="Building Utilization" category="Last Campaign Performance" stats="Campaign sent 2 days ago" content={<div id = "chartPreferences" className = "ct-chart ct-perfect-fourth" > <ChartistGraph data={dataPie} type="Pie"/>
            </div>} legend={<div className = "legend" > {
                this.createLegend(legendPie)
              }
              </div>
}/>
          </Col>
        </Row>
      </Grid>
    </div>);
  }
}

export default Dashboard;
