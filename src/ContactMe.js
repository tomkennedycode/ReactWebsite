import React from 'react';
import { Button, Form, FormGroup, Label, Input, Fade, Col, Row } from 'reactstrap';

export default class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <Form>
                <Row className="mt-4">
                    <Col sm="4" >
                        <FormGroup>
                            <label for="exampleName">Full Name</label>
                            <Input type="name" name="fullName" id="exampleName" placeholder="Please enter name here" / >
                        </FormGroup>
                    </Col>
                    <Col sm="4" >
                        <FormGroup>
                            <label for="exampleSubject">Subject</label>
                            <Input type="subject" name="subject" id="exampleName" placeholder="Please enter your subject here" / >
                        </FormGroup>
                    </Col>
                    <Col sm="4" >
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Please enter your email here" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleText">Message</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button onClick={this.toggle}>Submit</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    Success!
                </Fade>
            </Form>            
        );
    }
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
}