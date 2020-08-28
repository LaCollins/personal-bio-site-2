import './Technologies.scss';
import React from 'react';
import { Frame, Heading, Link } from 'arwes';

class Technologies extends React.Component {
  render() {
    return (
    <div className="Technologies" style={{ display: 'inline-block', padding: '30px' }}>
      <Frame animate level={3} corners={8} layer='primary' timeout={1000} appear={true}>
      <div className="techContents">
        <Heading animate>
          <h2 className="title">Tools &amp; Technologies</h2>
        </Heading>
        <div className="techInfo">
          <h4>A short overview of the tools and technologies I have experience using.</h4>
          <div className="row" id="techIcons">
            <div className="col-sm-3">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-html5" alt="HTML 5"></i> HTML5
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-css3-alt" alt="CSS"></i> CSS
               </Link>
            </div>
            <div className="col-sm-3 SASS">
              <Link href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-sass" alt="SASS"></i>
               </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-js-square" alt="JavaScript"></i> JavaScript
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-react" alt="React"></i> React
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-aws" alt="Amazon Web Services"></i>
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" alt="Github"></i> Github
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-npm" alt="NPM"></i>
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
              C#
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer">
              .NET
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
              Firebase
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
              JQuery
              </Link>
            </div>
            <div className="col-sm-3">
              <Link href="https://en.wikipedia.org/wiki/Cron" target="_blank" rel="noopener noreferrer">
              Cron
              </Link>
            </div>
          </div>
        </div>
      </div>
      </Frame>
    </div>
    );
  }
}

export default Technologies;
