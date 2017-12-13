import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Camera, Permissions } from 'expo';
import _ from 'lodash';

class Product extends Component {
  constructor(props) {
    super(props);
    this.onBarCodeRead = _.throttle(this.onBarCodeRead, 1000);
    this.state = {
    type: Camera.Constants.Type.back,
    };
  }

  onBarCodeRead(e) {
    this.props.fetchProduct(e.data);
    if (Object.keys(this.props.product).length !== 0) {
      if (this.props.product.product_name) {
        return (
          Alert.alert(
            'Found product!',
            `${this.props.product.product_name} exists in the database`,
            { cancelable: true }
          )
        );
      } else {
        return (
          Alert.alert(
            'No product found!',
            `Doesnt exist in the database`,
            { cancelable: true }
          )
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Camera
          ref={(cam) => {this.camera = cam;}}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
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
