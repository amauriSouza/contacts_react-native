import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../until/';

// Component Functional
const PeopleListItem = props => {
  const { people, navigateToPeopleDetail } = props;
  const { title, first, last } = people.name;

  return (
    <TouchableOpacity onPress={() => {
      navigateToPeopleDetail({people});
      }}>
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={{ uri: people.picture.thumbnail }}
        />
        <Text style={styles.lineText}>{`${capitalizeFirstLetter(
          title
        )}  ${capitalizeFirstLetter(first)}  ${capitalizeFirstLetter(
          last
        )}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb'
  },
  lineText: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 7,
    color: 'gray'
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50
  }
});

export default PeopleListItem;
