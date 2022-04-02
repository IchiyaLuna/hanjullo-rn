import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const LightButton = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '60%',
    backgroundColor: 'rgba(220, 230, 246, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
  },
  textStyle: {
    color: 'white',
    fontSize: 25,
    fontFamily: Platform.OS === 'ios' ? 'NanumNeuRisNeuRisCe' : 'Nanum_Neuris',
  },
});

export default LightButton;
