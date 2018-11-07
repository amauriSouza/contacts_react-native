import React from 'react';
import { View, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
  const { peoples, onPressItem } = props;

  const items = peoples.map(people =>    
    <PeopleListItem key={people.name.first} people={people} navigateToPeopleDetail={onPressItem} />
  );

  return <View style={styles.container}>{items}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

export default PeopleList;
