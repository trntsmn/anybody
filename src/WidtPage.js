import React, { Component } from 'react';
import './WidtPage.css';
import Draggable from 'react-draggable'; 
import MacWindow from './common/MacWindow';

class WidtPage extends Component {
  render() {
    return (
      <div className="WidtPage">
        <section>
          <MacWindow title="William Gibson" href="https://en.wikiquote.org/wiki/William_Gibson#Quotes">
            <h2>"The future is already here — it's just not very evenly distributed."</h2>
          </MacWindow>
          <MacWindow title="Success" href="https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" src="https://blog.intercomassets.com/wp-content/uploads/2016/03/15030740/formula.png"></MacWindow>
          <MacWindow title="Privelidged A**holes" href="https://medium.com/s/story/digital-nomads-are-not-the-future-be360c7911b4"></MacWindow>
          <MacWindow title="Counter Point" href="https://blog.usejournal.com/digital-nomads-are-already-the-future-f27f3f6aed00">
            A prevailing pseudo-macho culture at big corporations, which plays on the susceptibility of young people [...] to peer pressure; convincing them it’s ‘tough’ to work long, horrible hours [...], without complaining.
          </MacWindow>
          <MacWindow title="Tools of the Trade" href="https://ma.tt/2012/09/future-of-work/">

            <ul>
              <li>Teams, a business chat app used for day-to-day communication</li>
              <li>P2, a Wordpress theme modeled after Twitter’s stream with in-line replies for more in-depth discussions</li>
              <li>Wikis, field guides with content that rarely changes</li>
              <li>Zoom video conferencing</li>
            </ul>
          </MacWindow>
          <MacWindow title="US Government GSA Telework Policy" href="https://www.gsa.gov/cdnstatic/GSAteleworkpolicy.pdf" src="https://scontent-atl3-1.cdninstagram.com/vp/4bef3e847e4bdc45c5e39d3699b07889/5C2D9CEE/t51.2885-15/sh0.08/e35/p750x750/41310245_475464112977412_4451832621292271692_n.jpg"/>
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
          <MacWindow title="Hello" href="https://www.youtube.com/watch?v=yRDOrCFIY4c">
            <p>Welcome to my Wish I Did That September 2018. <blink>Please Enjoy.</blink> Follow along at http://bit.ly/2ngxz</p>
          </MacWindow>
        </section>
      </div>
    );
  }
}

export default WidtPage;
