import React from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        start:  'debut',
        end:  'fin',
        location: 'PLACE',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        start: 'debut',
        end: 'fin',
        location: 'PLACE',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        start: 'debut',
        end: 'fin',
        location: 'PLACE',
    },
];
export default class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>

                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} date={item.start} location={item.location}/>}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <TouchableOpacity onPress={this.ClockClicked.bind(this)} style={styles.bottomButtonContainer}>
                    <Text style={styles.bottomButton}>{this.state.buttonText}</Text>

                </TouchableOpacity>

            </View>
        );
    }
