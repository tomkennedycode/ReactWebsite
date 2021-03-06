import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import socialIcon from 'react-social-icons/lib/social-icon';

export default class SocialIcons extends React.Component {
    render() {
        return (  
            <div>
                <h1 className="welcomeHeader headerMargin">Connect With Me</h1>
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <SocialIcon url="https://www.linkedin.com/in/tom-kennedy-42529a15a/" color="#cacaca" className="ml-1 mr-1" />
                        <SocialIcon url="https://github.com/tomkennedycode" color="#cacaca" className="ml-1 mr-1" />
                        <SocialIcon url="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tom.kennedy017@gmail.com&su=I%27ve%20come%20across%20your%20portfolio&tf=1" color="#cacaca" className="ml-1 mr-1" />
                    </div>
                </div>
                <hr className="my-2" />
            </div>
        )
    }
}