import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {ApplicationProperties} from "../../utils/ApplicationProperties";

export class AboutScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={ApplicationProperties.appInfo}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                            <View style={styles.flatview}>
                                <Text style={styles.key}>{item.key}</Text>
                                <Text style={styles.value}>{item.value}</Text>
                            </View>
                        }
                        keyExtractor={item => item.key}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 10,
        justifyContent: 'center'
    },
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
    },
    key: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    value: {
        color: 'red'
    }
});