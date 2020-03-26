import './Technologies.scss';
import React from 'react';

class Technologies extends React.Component {
  render() {
    return (
    <div className="Technologies container">
      <div className="techContents">
        <h2>Tools &amp; Technologies</h2>
        <div className="techInfo">
          <h4>A short overview of the tools and technologies I have experience using.</h4>
          <div className="row" id="techIcons">
            <div className="col-sm-3">
              <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-html5" alt="HTML 5"></i> HTML5
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-css3-alt" alt="CSS"></i> CSS
               </a>
            </div>
            <div className="col-sm-3 SASS">
              <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-sass" alt="SASS"></i>
               </a>
            </div>
            <div className="col-sm-3">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-js-square" alt="JavaScript"></i> JavaScript
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-react" alt="React"></i> React
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-aws" alt="Amazon Web Services"></i>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" alt="Github"></i> Github
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-npm" alt="NPM"></i>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
              C#
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer">
              .NET
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
              Firebase
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
              JQuery
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://en.wikipedia.org/wiki/Cron" target="_blank" rel="noopener noreferrer">
              Cron
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Technologies;
