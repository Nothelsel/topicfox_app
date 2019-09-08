import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 2, backgroundColor: 'green' }}></View>
        <View style={{ flex: 3, backgroundColor: 'blue' }}></View>
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
    
});
