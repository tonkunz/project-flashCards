import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import { indigo2, white } from '../utils/colors'
import TabNav from './TabNav'
import DeckPage from './DeckPage'

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
  }
}

const StackNav = createStackNavigator(router)

export default createAppContainer(StackNav)