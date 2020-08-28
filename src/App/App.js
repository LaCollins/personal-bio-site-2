import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import './App.scss';

import NavBar from '../components/shared/NavBar/NavBar';
import Bio from '../components/pages/Bio/Bio';
import Projects from '../components/pages/Projects/Projects';
import Technologies from '../components/pages/Technologies/Technologies';
import Contact from '../components/pages/Contact/Contact';
import background from '../helpers/assets/images/background.jpg';
import glow from '../helpers/assets/images/glow.png';

class App extends React.Component {
  resources = {
    bg: background,
    pattern: glow,
  }

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes resources={this.resources}>
        <div className="App">
        <Router>
        <NavBar />
          <Switch>
              <Route path="/" exact component={Bio} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/technologies" exact component={Technologies} />
              <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
        </div>
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
