import React from 'react';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';

export default class HomepageBody extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className="borderBottom">
                    <h1 className="display-3">Welcome</h1>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <p>Tom</p>
                    <p className="lead">
                    <Button color="primary">Hi, im a button</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}
