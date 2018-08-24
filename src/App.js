import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1>Trent Simon</h1>
        <div className="rel">
          <hr />
  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"/></svg>
        </div>
  
        <div className="stacked">
          
          <article>
          <h4>Universally Good</h4>
          <blockquote>C#, PHP, CSS, HTML, XML, SQL Server, TSQL, SQL, MySql, MariaDb, MongoDb, LINQ, Entity Framework, ORM, React, React Native, UWP, .NET 2.0, .NET 3.5, .NET 4.5.2, AngularJS, SCSS, LESS, Wordpress, Expression Engine, Drupal 5/6/7, AWS, S3, AWS IAM, Redshift, ASC Certified Tech, </blockquote>
          </article>
          <ul>
            <li>@trntsmn</li>         
            <li><a href="http://trentsimon.com/trentsimon-resume.pdf">Résumé</a></li>
            <li><a href="mailto:me@trentsimon.com">Email</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
