import React from "react"
import { View, Text, Image } from "react-native"


class LojinhaIcon extends React.Component {
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../images/lojinhaIcon.png')} style={{
                    width: 180,
                    height: 95,
                    borderRadius: 5,
                }}
                />
            </View>
        );
    }
}

export default LojinhaIcon;