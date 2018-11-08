import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=50&gender=female')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false
          });
        });
    }, 300);
  }

  render() {
    return (
      <View>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#278c39" />
        ) : null}
        <PeopleList
          peoples={this.state.peoples}
          onPressItem={pageParams => {
            this.props.navigation.navigate('PeopleDetails', pageParams);
          }}
        />r
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerLoading: {
    flex: 1,
    justifyContent: 'center',
  }
});
