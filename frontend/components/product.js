import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';

class Product extends Component {
  constructor(props) {
    super(props);
    this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.state = {
    type: Camera.Constants.Type.back,
    };
    // console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchProduct("0038000768620");  
  }

  onBarCodeRead(e) {
    console.log(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
    // console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>

        <Camera
          ref={(cam) => {this.camera = cam;}}
          onBarCodeRead={this.onBarCodeRead}
          style={styles.preview}
          autoFocus={Camera.Constants.autoFocus}>
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

export default Product;
