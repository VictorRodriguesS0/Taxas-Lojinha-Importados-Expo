import React from "react"
import { View, Text, Image } from "react-native"


class MovilePayIcon extends React.Component {
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../images/MovilePay.png')} style={{
                    width: 20,
                    height: 20
                }}
                />
            </View>
        );
    }
}

export default MovilePayIcon;