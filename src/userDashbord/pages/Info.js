import React from "react";

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
      <div style={{marginTop:'16rem'}}>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Gases Emission</Card.Title>
                <p className="card-category" style={{fontSize:'15px'}}>
                  NO2:Nitrogen Dioxide, HC:HydroCarbon, VOC:Voltaic Organic Compounds and CO:Carbon Monoxide
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">amount(ppm)</th>
                      <th className="border-0">Decrease(-)</th>
                      <th className="border-0">Increase(+)</th>
                      <th className="border-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>NO2</td>
                      <td>573</td>
                      <td>2.3</td>
                      <td>0.9</td>
                      <td>Wonned</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>HC</td>
                      <td>423</td>
                      <td>0</td>
                      <td>0.9</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>VOC</td>
                      <td>412</td>
                      <td>5</td>
                      <td>0</td>
                      <td>Wonned</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>CO</td>
                      <td>112</td>
                      <td>2.3</td>
                      <td>0.9</td>
                      <td>Wonned</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1>Actions</h1>
      </Container>
    </div>
  );
}

export default TableList;
