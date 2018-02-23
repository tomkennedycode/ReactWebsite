import React from 'react';
import { Button } from 'reactstrap';
import { TheFooter, TheFooterStyle } from 'the-footer';
import { TheRouter } from 'the-router';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const { CopyRight } = TheFooter

export default class Footer extends React.Component {
    scrollToTop() {
      scroll.scrollToTop();
    }

    render() {
        return(
            <div>
            <TheRouter>
              <TheFooterStyle/>
              <TheFooter>
                <CopyRight year='2018' holder='Tom Kennedy'/>
                <Button onClick={this.scrollToTop}>Back to top?</Button>
              </TheFooter>
            </TheRouter>
          </div>
        );
    }
}