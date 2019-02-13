import React from 'react';
import './App.css';

export default class TechnicalSkills extends React.Component {
    render() {
        return (
            <div>
                <h2 className="welcomeHeader headerMargin">Technical Skills</h2>
                <p>C#, MVC, Web Api 2, .NET Core 2, MSSQL, Version Control (Azure Dev Ops, TFS, Git), NPM, HTML, CSS, Unit Testing, IIS 7, Javascript(ES6/7), React.</p>
                <p className="mb-3">This website was made using react.</p>
                <hr className="my-2" />
            </div>
        );
    }
}
