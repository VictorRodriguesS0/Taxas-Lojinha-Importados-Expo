import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { StatusBar, Text, Image, StyleSheet } from 'react-native'

import { WebBrowser } from 'expo';
import { View, Button, Icon } from 'native-base';
import { WebView } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={styles.buttons}>
        <Button iconLeft block
          style={{ marginBottom: 10, marginHorizontal: 10 }}
          onPress={this._abrirTabela}
        >
          <Icon name="list-box" />
          <Text style={{ paddingLeft: 10, color: 'white' }}>
            Lista de Produtos
        </Text>

        </Button>
        <Button iconLeft block
          onPress={this._abrirLocalizacao}
          style={{ marginBottom: 10, marginHorizontal: 10 }}
        >
          <Icon name="pin" />
          <Text style={{ paddingLeft: 10, color: 'white' }}>
            Localização
        </Text>
        </Button>
        <Button iconLeft block
          onPress={this._abrirSite}
          style={{ marginBottom: 10, marginHorizontal: 10 }}
        >
          <Icon name="link" />
          <Text style={{ paddingLeft: 10, color: 'white' }}>
            Site Lojinha Importados
        </Text>
        </Button>

        <Button iconLeft block
          onPress={this._abrirInsta}
          style={{ marginBottom: 10, marginHorizontal: 10 }}
        >
          <Icon name="logo-instagram" />
          <Text style={{ paddingLeft: 10, color: 'white' }}>
            Instagram
        </Text>
        </Button>

        <Button iconLeft block
          onPress={this._abrirFace}
          style={{ marginBottom: 10, marginHorizontal: 10 }}
        >
          <Icon name="logo-facebook" />
          <Text style={{ paddingLeft: 10, color: 'white' }}>
            Facebook
        </Text>
        </Button>
        <Button iconLeft block
          onPress={this._abrirWhatsapp}
          style={{ marginBottom: 10, marginHorizontal: 10 }}
        >
          <Icon name="logo-whatsapp" />
          <Text style={{ paddingLeft: 10, color: 'white' }}>
            WhatsApp
        </Text>
        </Button>
        <Button iconLeft block
          onPress={this._abrirTelegram}
          style={{ marginBottom: 10, marginHorizontal: 10 }}
        >
          <Text style={{ paddingLeft: 10, color: 'white' }}>
            Telegram
        </Text>
        </Button>

        <Button iconLeft block
          onPress={this._abrirMercadoLivre}
          style={{ marginBottom: 10, marginHorizontal: 10 }}
        >
          <Text style={{ paddingLeft: 10, color: 'white' }}>
            Mercado Livre
        </Text>
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
    marginHorizontal: 10
  }
})