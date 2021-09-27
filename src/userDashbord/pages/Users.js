import React from "react";
import profile from '../../images/profile.jpg';
// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const User = () => {

  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  return (
    <div style={{marginTop:'16rem'}}>
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-2" md="5">
                      <Form.Group>
                        <label>Serial Number</label>
                        <Form.Control style={{borderColor:'#0C331E'}}
                          defaultValue="RAB345M"
                          placeholder="SerialNumber"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control style={{borderColor:'#0C331E'}}
                          value={user}
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control style={{borderColor:'#0C331E'}}
                          placeholder="Email"
                          value={email}
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control style={{borderColor:'#0C331E'}}
                         defaultValue="Mike"
                          placeholder="First Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control style={{borderColor:'#0C331E'}}
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control style={{borderColor:'#0C331E'}}
                          defaultValue="Kigali Convention Centre, KG 2 Roundabout, Kigali"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" >
                      <Form.Group>
                        <label>City</label>
                        <Form.Control style={{borderColor:'#0C331E'}}
                          defaultValue="Kigali"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button style={{backgroundColor:'#0C331E',color:'white',borderColor:'#0C331E'}}
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user" style={{borderColor:'#0C331E'}}>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" style={{textDecoration:'none'}}onClick={(e) => e.preventDefault()}>
                    <img alt="..." src={profile} className="avatar border-gray"></img>
                    <h5 className="title" style={{color:'black'}}>{email}</h5>
                  </a>
                  <p className="description">{user}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    </div>
  );
};

export default User;
