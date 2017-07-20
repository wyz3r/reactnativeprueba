import React, { Component } from 'react';
import { View } from 'react-native';

// Make a Component
const Card = (props) => {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        {props.children}
      </View>
    );
  };
// Make the  Component avalaible to toher parts of the app
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  textStyle: {
  }
};
export { Card };
//expport component
