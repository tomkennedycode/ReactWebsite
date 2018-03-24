import React from 'react';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className="borderBottom font">
                    <h1 className="welcomeHeader">Welcome to my portfolio</h1>
                    <hr className="my-2" />
                    <p>Hi! My name's Tom. I am a young and commited web developer with good experience inside a small web development team. Always thinking of new ideas and researching the latest technology when it comes to web development. I have worked on projects that included HTML, CSS, Javascript, React and C# in a high pressure environment.  </p>
                </Jumbotron>
            </div>
        );
    }
}
