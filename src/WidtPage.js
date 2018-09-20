import React, { Component } from 'react';
import './WidtPage.css';
import Draggable from 'react-draggable'; 
import MacWindow from './common/MacWindow';

class WidtPage extends Component {
  render() {
    return (
      <div className="WidtPage">
        <section>
          <MacWindow title="Let's be honest" href="https://material-components.github.io/material-components-web-catalog/#/component/select">
            <p>Sometimes we do things that are dishonest... mainly we skin form in a way that isn't true to the compentents for and impacts the way the compenet functions for the user.</p>
          </MacWindow>
        
          <MacWindow title="Show Me Some Examples" href="http://brutalistwebsites.com/">
            <p>A collection of brutalist websites, most err on the side of experimental student work. They are nevertheless interesting in how raw they feel</p>
          </MacWindow>
          <MacWindow title="Be Brutal" href="https://brutalist-web.design/">
            <p>Web Design is honest about what a website is and what it isn't. A website is about giving visitors content to enjoy and ways to interact with you.</p>
          </MacWindow>
          <MacWindow title="David Taylor" body="Next Level! #okaybrogabe #okaybrodave #creativeagency #keepitwack. Follow @okaybro on Instagram for more work from this agency." src="/widt/dt.jpg" />
          <MacWindow title="Hello">
            <p>Welcome to my Wish I Did That September 2018. Please Enjoy. Follow along at http://bit.ly/</p>
          </MacWindow>
        </section>
      </div>
    );
  }
}

export default WidtPage;
