import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create datetimepicker
import Datetime from "react-datetime";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// react plugin that creates slider
import Nouislider from "react-nouislider";

import { PanelHeader, ImageUpload, Progress } from "components";

var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" }
];

class ExtendedForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: null,
      multipleSelect: null,
      regularTags: ["pizza", "pasta", "parmesan"]
    };
    this.handleRegularTags = this.handleRegularTags.bind(this);
  }
  handleRegularTags(regularTags) {
    this.setState({ regularTags });
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Datetime Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Date Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      timeFormat={false}
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Time Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      dateFormat={false}
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <CardBody>
                  <Row>
                    <Col xs={12} md={6}>
                      <CardTitle>Toggle Buttons</CardTitle>
                      <Row>
                        <Col xs={12} md={4}>
                          <p className="category">Default</p>
                          <Switch defaultValue={false} /> <Switch />
                        </Col>
                        <Col xs={12} md={4}>
                          <p className="category">Plain</p>
                          <Switch
                            onText=""
                            offText=""
                            defaultValue={false}
                          />{" "}
                          <Switch onText="" offText="" />
                        </Col>
                        <Col xs={12} md={4}>
                          <p className="category">With Icons</p>
                          <Switch
                            onText={<i className="now-ui-icons ui-1_check" />}
                            offText={
                              <i className="now-ui-icons ui-1_simple-remove" />
                            }
                            defaultValue={false}
                          />{" "}
                          <Switch
                            onText={<i className="now-ui-icons ui-1_check" />}
                            offText={
                              <i className="now-ui-icons ui-1_simple-remove" />
                            }
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={6}>
                      <CardTitle>Customisable Select</CardTitle>
                      <Row>
                        <Col xs={12} md={6}>
                          <Select
                            className="primary"
                            placeholder="Single Select"
                            name="singleSelect"
                            value={this.state.singleSelect}
                            options={selectOptions}
                            onChange={value =>
                              this.setState({ singleSelect: value })
                            }
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Select
                            className="warning"
                            multi={true}
                            closeOnSelect={false}
                            placeholder="Multiple Select"
                            name="multipleSelect"
                            value={this.state.multipleSelect}
                            options={selectOptions}
                            onChange={value =>
                              this.setState({ multipleSelect: value })
                            }
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <CardTitle>Tags</CardTitle>
                      <TagsInput
                        value={this.state.regularTags}
                        onChange={this.handleRegularTags}
                        tagProps={{ className: "react-tagsinput-tag info" }}
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <CardTitle>Dropdown & Dropup</CardTitle>
                      <Row>
                        <Col xs={12} md={6} sm={3} lg={4}>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color="info"
                              className="btn-round btn-block"
                              caret
                            >
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem disabled>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                        <Col xs={12} md={6} sm={3} lg={4}>
                          <UncontrolledDropdown dropup>
                            <DropdownToggle
                              color="primary"
                              className="btn-round btn-block"
                              caret
                            >
                              Dropup
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem disabled>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <CardTitle>Progress Bars</CardTitle>
                      <Progress badge="Default" value="25" />
                      <Progress color="primary" badge="primary" value="60" />
                    </Col>
                    <Col xs={12} md={6}>
                      <CardTitle>Sliders</CardTitle>
                      <Nouislider
                        start={[40]}
                        connect={[true, false]}
                        step={1}
                        range={{ min: 0, max: 100 }}
                      />
                      <br />
                      <div className="slider slider-primary">
                        <Nouislider
                          start={[20, 60]}
                          connect={[false, true, false]}
                          step={1}
                          range={{ min: 0, max: 100 }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={4} md={4}>
                      <CardTitle>Regular Image</CardTitle>
                      <ImageUpload />
                    </Col>
                    <Col xs={12} sm={4} md={3}>
                      <CardTitle>Avatar</CardTitle>
                      <ImageUpload avatar />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ExtendedForms;
