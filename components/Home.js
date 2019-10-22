import React from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    bottomButton: {
        width: '95%',
        height: '95%',
        backgroundColor: '#1a66c9',
        textAlign: "center",
        textAlignVertical: 'center',
        color:'white',
        paddingLeft: '5%',
        fontWeight: "900",
        borderRadius:10,
    },
    bottomButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: 50,
    },
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#68b1e8',
        padding: 0,
        paddingLeft:10,
        paddingBottom:10,
        marginVertical: 6,
        marginHorizontal: 4,
        borderRadius: 10,
    },
    title: {
        marginTop: 0,
        paddingTop: 0,
        fontSize: 48,
    },
    itemInfo:{
        flexDirection: 'row',
    },
    itemLine:{
        flex:1,
    }
});

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
    constructor(props) {
        super(props)
        this.state = {
            isCounting: false,
            buttonText: 'Clock In'
        }
    }

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

    ClockClicked(){
        this.state.isCounting = !this.state.isCounting;
        if (this.state.isCounting) {
            this.state.buttonText = "Clock Out"
        } else {
            this.state.buttonText = "Clock In"
        }
        this.forceUpdate()
    }
}

function Item({ title , date, location}) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.itemInfo}>
                <Text style={styles.itemLine}>{date}</Text>
                <Text style={styles.itemLine}>{location}</Text>
                <Text style={styles.itemLine}>{date}</Text>
                <Text style={styles.itemLine}>{location}</Text>
            </View>
        </View>
    );
}
