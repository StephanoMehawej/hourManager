import React from 'react';
import { Button, Text, View } from 'react-native';
import { createAppContainer, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27
import { createBottomTabNavigator } from 'react-navigation-tabs'; // 1.0.0-beta.27

export default class Settings extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}