import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Line from '../components/Line';

export default class PeopleDetailsPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: people.picture.large }} />
        <View style={styles.containerContent}>
          <Line label="Idade:" content={people.dob.age} />
          <Line label="Email:" content={people.email} />
          <Line label="Rua:" content={people.location.street} />
          <Line label="Cidade" content={people.location.city} />
          <Line label="Telefone:" content={people.phone} />
          <Line label="Celular:" content={people.cell} />
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
  },
  bold: {
    fontWeight: 'bold'
  }
});
