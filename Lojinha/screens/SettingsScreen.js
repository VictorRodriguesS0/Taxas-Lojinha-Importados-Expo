import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { StatusBar, Text, Image, StyleSheet } from 'react-native'

import { WebBrowser } from 'expo';
import { View } from 'native-base';
import { WebView } from 'react-native'
import { SocialIcon, Icon } from 'react-native-elements'

import { Button } from 'react-native-paper'
import SumUp from './SumUp';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ margin: 10 }}>

        <Button
          style={styles.buttons}
          icon={require('../images/socialIcons/lista.png')}
          mode='contained'
          onPress={this._abrirTabela}
          uppercase={false}
          color='#287233'
        >
          Lista de Produtos
        </Button>

        <Button
          style={styles.buttons}
          icon={require('../images/socialIcons/local.png')}
          mode='contained'
          onPress={this._abrirLocalizacao}
          uppercase={false}
          color='#4A89F3'
        >
          Localização
        </Button>

        <Button
          style={styles.buttons}
          icon={require('../images/socialIcons/instagram.png')}
          mode='contained'
          onPress={this._abrirInsta}
          uppercase={false}
          color='#833AB4'
        >
          Siga-nos no Instagram
        </Button>

        <Button
          style={styles.buttons}
          icon={require('../images/socialIcons/facebook.png')}
          mode='contained'
          onPress={this._abrirFace}
          uppercase={false}
          color='#3C5A99'
        >
          Curta-nos no Facebook
        </Button>

        <Button
          style={styles.buttons}
          icon={require('../images/socialIcons/whatsappp.png')}
          mode='contained'
          onPress={this._abrirWhatsapp}
          uppercase={false}
          color='#25D366'
        >
          Fale conosco!
        </Button>

        <Button
          style={styles.buttons}
          icon={require('../images/socialIcons/telegram.png')}
          mode='contained'
          onPress={this._abrirTelegram}
          uppercase={false}
          color='#0088cc'
        >
          Fale conosco!
        </Button>

        <Button
          style={styles.buttons}
          icon={require('../images/socialIcons/lojinha.png')}
          mode='contained'
          onPress={this._abrirSite}
          uppercase={false}
          color='#4E3599'
        >
          Visite nosso site
        </Button>

        <Button
          style={styles.buttons}
          icon={require('../images/socialIcons/mercado.png')}
          mode='contained'
          onPress={this._abrirMercadoLivre}
          uppercase={false}
          color='#ffff00'
        >
          Nosso Mercado Livre
        </Button>


        <Button
          style={styles.buttons}
          icon={require('../images/SumUp.png')}
          mode='contained'
          onPress={() => this.props.navigation.navigate("SumUp")}
          uppercase={false}
          color='#3232ff'
        >
          Taxas Maquina SumUp
        </Button>


      </View>

    )
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
  }

  _abrirTabela = async () => {
    let result = await WebBrowser.openBrowserAsync('https://docs.google.com/spreadsheets/d/1mWO7zcsIWNiYZd1C3kKsfj9xRHqwMiibaQxFPN41m0M/edit?usp=sharing')
    this.setState({ result })
  }
  _abrirLocalizacao = async () => {
    let result = await WebBrowser.openBrowserAsync('https://goo.gl/maps/4gr38tMoLzp')
    this.setState({ result })
  }
  _abrirSite = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.lojinhaimportados.com/')
    this.setState({ result })
  }
  _abrirInsta = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.instagram.com/lojinhaimportadosdf/')
    this.setState({ result })
  }
  _abrirFace = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.facebook.com/lojinhaeletronicos')
    this.setState({ result })
  }

  _abrirWhatsapp = async () => {
    let result = await WebBrowser.openBrowserAsync('https://api.whatsapp.com/send?phone=5561983453409')
    this.setState({ result })
  }

  _abrirTelegram = async () => {
    let result = await WebBrowser.openBrowserAsync('https://t.me/lojinhaimportados')
    this.setState({ result })
  }

  _abrirMercadoLivre = async () => {
    let result = await WebBrowser.openBrowserAsync('https://perfil.mercadolivre.com.br/LOJINHA+IMPORTADOS')
    this.setState({ result })
  }




}

const styles = StyleSheet.create({
  buttons: {
    color: "#4E3599",
    marginBottom: 10,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 15,
    marginBottom: 10,
    justifyContent: 'center'

  }
})