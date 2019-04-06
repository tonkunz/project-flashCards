import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { indigo2, white } from '../utils/colors'
import TabNav from './TabNav'
import DeckPage from './DeckPage'
import AddCard from './AddCard'

const router = {
  Home: {
    screen: TabNav,
    navigationOptions: {
      header: null
    }
  },
  DeckPage: {
    screen: DeckPage,
    navigationOptions: {
      title: 'Single Deck Info',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: indigo2
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Adding a New Card!',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: indigo2
      }
    }
  }
}

const StackNav = createStackNavigator(router)

export default createAppContainer(StackNav)