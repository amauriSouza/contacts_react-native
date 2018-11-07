import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PeopleDetailsPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: people.picture.large }} />
        <View style={styles.container}>
          <Text style={styles.textInfo}>{people.email}</Text>
          <Text style={styles.textInfo}>{people.dob.age}</Text>
          <Text style={styles.textInfo}>{people.location.street}</Text>
          <Text style={styles.textInfo}>{people.location.city}</Text>
          <Text style={styles.textInfo}>{people.location.state}</Text>
          <Text style={styles.textInfo}>{people.phone}</Text>
          <Text style={styles.textInfo}>{people.cell}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    width: 190,
    height: 190,
    borderRadius: 90
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  textInfo: {
    fontSize: 18,
    color: 'gray'
  }
});
