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

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <SoundsProvider sounds={createSounds(mySounds)}>
          <Arwes resources={this.resources} animate pattern={glow} stype={{ padding: 20 }}>
            <div className="App">
            <Router>
            <NavBar />
              <Switch>
                <Puffs>
                  <Route path="/" exact component={Bio} />
                  <Route path="/projects" exact component={Projects} />
                  <Route path="/technologies" exact component={Technologies} />
                  <Route path="/contact" exact component={Contact} />
                </Puffs>
              </Switch>
            </Router>
            <div className="footerContents d-flex row justify-content-between">
              <Line animate />
              <div>© Laura E. Collins</div>
              <Link href="https://github.com/arwesjs/arwes" alt="Arwes theme">Arwes API by Romel Pérez</Link>
            </div>
            </div>
          </Arwes>
        </SoundsProvider>
      </ThemeProvider>
    );
  }
}

export default App;
