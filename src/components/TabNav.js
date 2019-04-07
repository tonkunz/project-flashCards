import {
  createAppContainer,
  createMaterialTopTabNavigator,
  View
} from 'react-navigation'
import { indigo2, white } from '../utils/colors'
import NewDeck from './NewDeck'
import DeckList from './DeckList'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

const router = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
    },
  },
}

const navigationOptions = {
  tabBarOptions: {
    // showIcon: true,
    activeTintColor: white,
    style: {
      padding: 10,
      height: 'auto',
      fontSize: 18,
      backgroundColor: indigo2,
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