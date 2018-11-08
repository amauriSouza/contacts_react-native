import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PeopleDetailsPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: people.picture.large }} />
        <View style={styles.containerContent}>
          <View style={styles.row}>
            <Text style={styles.textInfo}>Idade: </Text>
            <Text style={styles.textInfo}>{people.dob.age}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textInfo}>Email: </Text>
            <Text style={styles.textInfo}>{people.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textInfo}>Rua: </Text>
            <Text style={styles.textInfo}>{people.location.street}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textInfo}>Cidade: </Text>
            <Text style={styles.textInfo}>{people.location.state}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textInfo}>Telefone: </Text>
            <Text style={styles.textInfo}>{people.phone}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textInfo}>Celular: </Text>
            <Text style={styles.textInfo}>{people.cell}</Text>
          </View>
          
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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  containerContent: {
    marginTop: 20,
    padding: 25,
    width: '90%',
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#fff'
  },
  textInfo: {
    fontSize: 18,
    color: 'gray'
  }
});
