import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Line = ({ label = "", content = "-" }) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.textInfo, styles.bold]}>{label}</Text>
      <Text style={styles.textInfo}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  textInfo: {
    fontSize: 18,
    color: 'gray'
  },
  bold: {
    fontWeight: 'bold'
  }
});


export default Line;