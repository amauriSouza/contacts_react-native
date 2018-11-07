import { StackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailsPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/until';

export default StackNavigator(
  {
    Main: {
      screen: PeoplePage
    },
    PeopleDetails: {
      screen: PeopleDetailsPage,
      navigationOptions: ({ navigation }) => {
        const peopleName = navigation.state.params.people.name.first;
        return {
          title: `${capitalizeFirstLetter(peopleName)}`
          // headerTitleStyle:{
          //   color: 'white',
          //   fontSize: 20
          // },
        };
      }
    }
  },
  {
    navigationOptions: {
      title: 'Contatos',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#278c39',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20
      }
    }
  }
);
