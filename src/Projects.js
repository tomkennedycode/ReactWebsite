import React from 'react';
import './App.css';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1 className="welcomeHeader">My Projects</h1>
                <CardGroup className="mb-4">
                <Card>
                    <div className="projectContainer">
                        <a href="http://www.medwayyouthcouncil.co.uk/" target="_blank">
                            <CardImg top width="100%" src="/Images/MYCLogo.png" alt="Card image cap" className="hoverOver"/>
                            <div class="projectOverlay">
                                <div className="overlayText">Click me!</div>
                            </div>
                        </a>
                    </div>
                    <CardBody>
                        <CardTitle>Medway Youth Council</CardTitle>
                        <CardSubtitle>Made in MVC</CardSubtitle>
                        <CardText>Working at Questor gave me many oppotunities inside and outside of the workplace. When my boss gave me a side job to make the MYC website I didn't think twice.</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <div className="projectContainer">
                        <a href="http://www.medwayyouthcouncil.co.uk/" target="_blank">
                            <CardImg top width="100%" src="/Images/WorkInProgress.png" alt="Card image cap" className="hoverOver"/>
                            <div class="projectOverlay">
                                <div className="overlayText">Not finished yet! :(</div>
                            </div>
                        </a>
                    </div>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                    </CardBody>
                </Card>
                <Card>
                    <div className="projectContainer">
                        <a href="http://www.medwayyouthcouncil.co.uk/" target="_blank">
                            <CardImg top width="100%" src="/Images/WorkInProgress.png" alt="Card image cap" className="hoverOver"/>
                            <div class="projectOverlay">
                                <div className="overlayText">Not finished yet! :(</div>
                            </div>
                        </a>
                    </div>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                    </CardBody>
                </Card>
                </CardGroup>
            </div>
        );
    }
}