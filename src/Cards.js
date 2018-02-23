import React from 'react';
import { Row, Card, CardText, Col, CardTitle, Button } from 'reactstrap';

export default class Cards extends React.Component { 
        render() {
        return (
            <Row className="borderBottom">
            <Col sm="3">
              <Card body className="mb-4">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="3" className="mb-4">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        )
    }
}