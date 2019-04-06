import React from 'react'
import { View } from 'react-native'
import StackNav from './src/components/StackNav'
import FlashCardsStatusBar from './src/components/FlashCardsStatusBar'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/store/reducers'
import { setLocalNotification } from './src/utils/helpers'


export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <FlashCardsStatusBar backgroundColor={'#3F51B5'} barStyle='light-content'/>
          <StackNav />
        </View>
      </Provider>
    )
  }
}