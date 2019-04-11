import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {StatusBar, Button} from 'react-native'

import { WebBrowser } from 'expo';
import { View, Text } from 'native-base';
import {WebView} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Extras',
  };

  render() {

    return(
      <View style={{paddingTop: StatusBar.currentHeight}}>
        <Button
          title="Tabela de preços"
          onPress={this._abrirTabela}
        />
      </View>

    )
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
  }

  _abrirTabela = async () => {
    let result = await WebBrowser.openBrowserAsync('https://docs.google.com/spreadsheets/d/1mWO7zcsIWNiYZd1C3kKsfj9xRHqwMiibaQxFPN41m0M/edit?usp=sharing')
    this.setState({ result })
  }
}
