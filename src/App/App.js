import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  ThemeProvider, createTheme, Arwes, Puffs, SoundsProvider,
  createSounds, Line, Link,
} from 'arwes';
import './App.scss';

import NavBar from '../components/shared/NavBar/NavBar';
import Bio from '../components/pages/Bio/Bio';
import Projects from '../components/pages/Projects/Projects';
import Technologies from '../components/pages/Technologies/Technologies';
import Contact from '../components/pages/Contact/Contact';
import background from '../helpers/assets/images/background.jpg';
import glow from '../helpers/assets/images/glow.png';
import clickSound from '../helpers/assets/sounds/click.mp3';
import typingSound from '../helpers/assets/sounds/typing.mp3';
import deploySound from '../helpers/assets/sounds/deploy.mp3';

const mySounds = {
  shared: { volume: 1 },
  players: {
    click: {
      sound: { src: [clickSound] },
    },
    typing: {
      sound: { src: [typingSound] },
    },
    deploy: {
      sound: { src: [deploySound] },
    },
  },
};

class App extends React.Component {
  resources = {
    bg: background,
    pattern: glow,
  }

  state = {
    showBio: false,
    showProj: false,
    showTech: false,
    showContact: false,
  }

  setShowBio = () => {
    this.setState({
      showBio: true, showProj: false, showTech: false, showContact: false,
    });
  }

  setShowProj = () => {
    this.setState({
      showProj: true, showBio: false, showTech: false, showContact: false,
    });
  }

  setShowTech = () => {
    this.setState({
      showTech: true, showProj: false, showBio: false, showContact: false,
    });
  }

  setShowContact = () => {
    this.setState({
      showContact: true, showProj: false, showTech: false, showBio: false,
    });
  }

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <SoundsProvider sounds={createSounds(mySounds)}>
          <Arwes resources={this.resources} animate show pattern={glow} stype={{ padding: 20 }}>
            {(anim) => (
              <div className="App">
                <Router>
                <NavBar anim={anim} setShowBio={this.setShowBio} setShowProj={this.setShowProj} setShowTech={this.setShowTech} setShowContact={this.setShowContact} />
                  <Switch>
                    <Puffs>
                      <Route path="/" exact render={(props) => <Bio {...props} anim={anim} />}/>
                      <Route path="/projects" exact render={(props) => <Projects {...props} anim={anim}/>} />
                      <Route path="/technologies" exact render={(props) => <Technologies {...props} anim={anim}/>} />
                      <Route path="/contact" exact render={(props) => <Contact {...props} anim={anim}/>} />
                    </Puffs>
                  </Switch>
                <div className="footerContents d-flex row justify-content-between">
                  <Line animate show={anim.entered}/>
                  <div>© Laura E. Collins</div>
                  <Link animate show={anim.entered} href="https://github.com/arwesjs/arwes" alt="Arwes theme">Arwes API by Romel Pérez</Link>
                </div>
                </Router>
            </div>
            )}
          </Arwes>
        </SoundsProvider>
      </ThemeProvider>
    );
  }
}

export default App;
