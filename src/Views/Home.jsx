import React, { Component } from "react";
import { Form, Button, Tab, Row, Col, Nav, Tabs } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { register_librarian, register_member } from "../Service/Service";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lib_username: "",
      lib_password: "",
      mem_username: "",
      mem_password: "",
    };
  }
  lib_formchange = (event) => {
    this.setState({
      [event.target.id]: [event.target.value],
    });
  };
  lib_Submit = () => {
    const obj = {
      username: this.state.lib_username[0],
      password: this.state.lib_password[0],
    };
    register_librarian(obj);
  };
  mem_formchange = (event) => {
    this.setState({
      [event.target.id]: [event.target.value],
    });
  };
  mem_Submit = () => {
    const obj = {
      username: this.state.mem_username[0],
      password: this.state.mem_password[0],
    };
    register_member(obj);
  };
  lib_signin = (e) => {
    e.preventDefault();
    axios.get("http://localhost:4200/librarian").then((result) => {
      const username = this.state.lib_username[0];
      const password = this.state.lib_password[0];
      for (let i = 0; i < result.data.length; i++) {
        if (username === result.data[i].username) {
          if (password === result.data[i].password) {
            this.props.history.push("/librarian");
          } else {
            alert("Incorrect Username or Password");
          }
        }
      }
    });
  };
  mem_signin = (e) => {
    e.preventDefault();
    localStorage.setItem("userName",this.state.mem_username);
    axios.get("http://localhost:4200/member").then((result) => {
      const username = this.state.mem_username[0];
      const password = this.state.mem_password[0];
      for (let i = 0; i < result.data.length; i++) {
        if (username === result.data[i].username) {
          if (password === result.data[i].password) {
            this.props.history.push("/member");
          } else {
            alert("Incorrect Username or Password");
          }
        }
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Library</h1>
        </header>
        <body>
          <div>
            <br />
            <br />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Librarian</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Member</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={2}></Col>
                <Col sm={4}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                      >
                        <Tab eventKey="home" title="Sign In">
                          <br />
                          <h2>Sign In</h2>
                          <Form onSubmit={this.lib_signin}>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>
                                <h4>UserName</h4>
                              </Form.Label>
                              <Form.Control
                                id="lib_username"
                                onChange={this.lib_formchange}
                                type="text"
                                placeholder="Enter username"
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Label>
                                <h4>Password</h4>
                              </Form.Label>
                              <Form.Control
                                id="lib_password"
                                onChange={this.lib_formchange}
                                type="password"
                                placeholder="Password"
                              />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                              Sign In
                            </Button>
                          </Form>
                        </Tab>
                        <Tab eventKey="profile" title="Register">
                          <br />
                          <h2>Registration</h2>
                          <Form onSubmit={this.lib_Submit}>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>
                                <h4>UserName</h4>
                              </Form.Label>
                              <Form.Control
                                id="lib_username"
                                onChange={this.lib_formchange}
                                type="text"
                                placeholder="Enter username"
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Label>
                                <h4>Password</h4>
                              </Form.Label>
                              <Form.Control
                                id="lib_password"
                                onChange={this.lib_formchange}
                                type="password"
                                placeholder="Password"
                              />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                              Register
                            </Button>
                          </Form>
                        </Tab>
                      </Tabs>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                      >
                        <Tab eventKey="home" title="Sign In">
                          <br />
                          <h2>Sign In</h2>
                          <Form onSubmit={this.mem_signin}>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>
                                <h4>UserName</h4>
                              </Form.Label>
                              <Form.Control
                                id="mem_username"
                                onChange={this.mem_formchange}
                                type="text"
                                placeholder="Enter username"
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Label>
                                <h4>Password</h4>
                              </Form.Label>
                              <Form.Control
                                id="mem_password"
                                onChange={this.mem_formchange}
                                type="password"
                                placeholder="Password"
                              />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                              Sign In
                            </Button>
                          </Form>
                        </Tab>
                        <Tab eventKey="profile" title="Register">
                          <br />
                          <h2>Registration</h2>
                          <Form onSubmit={this.mem_Submit}>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>
                                <h4>UserName</h4>
                              </Form.Label>
                              <Form.Control
                                id="mem_username"
                                onChange={this.mem_formchange}
                                type="text"
                                placeholder="Enter username"
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Label>
                                <h4>Password</h4>
                              </Form.Label>
                              <Form.Control
                                id="mem_password"
                                onChange={this.mem_formchange}
                                type="password"
                                placeholder="Password"
                              />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                              Register
                            </Button>
                          </Form>
                        </Tab>
                      </Tabs>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default Home;
