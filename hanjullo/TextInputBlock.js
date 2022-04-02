import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

const TextInputBlock = props => {
  return (
    <View style={dStyles(props.width, props.height, props.color).blockView}>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '100%',
    fontFamily: Platform.OS === 'ios' ? 'NanumNeuRisNeuRisCe' : 'Nanum_Neuris',
    fontSize: 20,
    color: 'white',
  },
});

const dStyles = (width, height, color) =>
  StyleSheet.create({
    blockView: {
      width: width,
      height: height,
      backgroundColor: color,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default TextInputBlock;
