import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class Product extends Component {
  constructor(props) {
    super(props);
    this.onBarCodeRead = this.onBarCodeRead.bind(this);
  }

  onBarCodeRead(e) {
    console.log(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }

  render() {
    return (
      <View style={styles.container}>

      <Camera
      ref={(cam) => {this.camera = cam;}}
      onBarCodeRead={this.onBarCodeRead()}
      style={styles.preview}
      aspect={Camera.constants.Aspect.fill}>
      </Camera>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('Product', () => Product);
