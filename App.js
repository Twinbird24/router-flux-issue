import React, { Component } from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

class App extends Component {
  render() {
    return (
      <Router key="router">
        <Stack key="root">
          <Scene
            initial
            key="pageOne"
            component={PageOne}
            rightTitle="Page Two"
            onRight={() => Actions.pageTwo()}
          />
          <Scene
            key="pageTwo"
            component={PageTwo}
            rightTitle="Do Something"
            leftTitle="Go Back"
            onLeft={() => { }} // set by the Actions component
            onRight={() => { }} // set by the Actions component
          />
        </Stack>
      </Router>
    );
  }
}

export default App;
