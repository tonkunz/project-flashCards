import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'

// Components
import NewDeck from './NewDeck'
import DeckList from './DeckList'

// Icons
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const router = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      // tabBarIcon: <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      // tabBarIcon: <FontAwesome name="plus-square" size={30} color={tintColor} />,
    },
  },
}

const navigationOptions = {
  tabBarOptions: {
    // showIcon: true,
    activeTintColor: '#FFF',
    style: {
      padding: 10,
      height: 'auto',
      fontSize: 18,
      backgroundColor: '#3F51B5',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
}

const TabNav = createMaterialTopTabNavigator(router, navigationOptions)

export default createAppContainer(TabNav)