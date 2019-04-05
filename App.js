import React from 'react'
import {
  View
} from 'react-native'
// Navigation
import TabNav from './src/components/TabNav'
// Components
import FlashCardsStatusBar from './src/components/FlashCardsStatusBar'


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlashCardsStatusBar backgroundColor={'#3F51B5'} barStyle='light-content'/>
        <TabNav />
      </View>
    )
  }
}