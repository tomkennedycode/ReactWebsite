import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar.js';
import Welcome from './Welcome.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';
import Footer from './Footer.js';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Homepage extends React.Component {
    render() {
        return (
            <div>                
                <div className="container">
                    <NavBar />
                    <Welcome />
                    <Projects />
                    <ContactMe />
                    <Footer />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    (<BrowserRouter>
        <Route path="/" component={Homepage}></Route>
      </BrowserRouter>
    ),
    document.getElementById('root')
);

export default Homepage;
registerServiceWorker();