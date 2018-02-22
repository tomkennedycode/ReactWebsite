import React from 'react';
import { TheFooter, TheFooterStyle } from 'the-footer';
import { TheRouter } from 'the-router';

const { Links, Link, CopyRight } = TheFooter

export default class Footer extends React.Component {
    render() {
        return(
            <div>
            <TheRouter>
              <TheFooterStyle/>
              <TheFooter>
                <CopyRight year='2017' holder='the-labo'/>
                <Links>
                  <Link>Test</Link>
                </Links>
              </TheFooter>
            </TheRouter>
          </div>
        );
    }
}