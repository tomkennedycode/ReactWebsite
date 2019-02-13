import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Welcome from './Welcome';
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import SocialIcons from './SocialIcons';
import SkillsAndEducation from './SkillsAndEducation';
import Footer from './Footer';
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
                    <TechnicalSkills />
                    <SocialIcons />
                    <Projects />
                    <SkillsAndEducation />
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