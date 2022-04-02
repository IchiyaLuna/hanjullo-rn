import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BlockButton = props => {
  return (
    <TouchableOpacity
      style={
        dStyles(props.width, props.height, props.color, props.fontSize)
          .buttonStyle
      }
      onPress={props.onPress}>
      <Text
        style={
          dStyles(props.width, props.height, props.color, props.fontSize)
            .textStyle
        }>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const dStyles = (width, height, color, fontSize) =>
  StyleSheet.create({
    buttonStyle: {
      width: width,
      height: height,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 25,
    },
    textStyle: {
      color: 'white',
      fontSize: Number.parseInt(fontSize),
      fontFamily:
        Platform.OS === 'ios' ? 'NanumNeuRisNeuRisCe' : 'Nanum_Neuris',
    },
  });

export default BlockButton;
