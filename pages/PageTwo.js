import React, { Component } from 'react';
import { Alert, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.doSomething = this.doSomething.bind(this);
  }

  onEnter() {
    Actions.refresh({
      onRight: this.doSomething,
      onLeft: () => Actions.pop(),
    });
  }

  doSomething() {
    Alert.alert('TEST!')
  }

  render() {
    return (
      <View>
        <Text>Page Two</Text>
      </View>
    );
  }
}

export default PageTwo;
