import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar.js';
import HomepageBody from './Body.js';
import Cards from './Cards.js';
import Footer from './Footer.js';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Manager, Target, Popper, Arrow } from 'react-popper'

class Homepage extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                <HomepageBody />
                <Cards />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Homepage/>, document.getElementById('root'));

export default Homepage;
registerServiceWorker();