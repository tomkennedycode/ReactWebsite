import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button, Fade } from 'reactstrap';

export default class HomepageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Tom</h1>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <p>Tom</p>
                    <p className="lead">
                    <Button color="primary"onClick={this.toggle}>Fade</Button>
                        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                        Tom Kennedy
                        </Fade>
                    </p>
                </Jumbotron>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
}
