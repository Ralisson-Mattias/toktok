import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons'


import Home from '../screens/Home'
import { StyleSheet, Text, View } from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator()

export default () => {


    const Button = () => (
        <View style={styles.AreaButton}>
            <MaterialCommunityIcons name="plus" size={22} color="#000"/>
        </View>
    )

    return (
        <Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#000',
                    borderTopColor: 'rgba(255, 255, 255, 0.3)'
                },
                activeTintColor: '#fff'
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Início',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }}
            />
            <Screen
                name="Search"
                component={Home}
                options={{
                    title: 'Descobrir',
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="search" size={size} color={color} />
                    )
                }}
            />
            <Screen
                name="NewPost"
                component={Home}
                options={{
                    tabBarLabel: () => false,
                    tabBarIcon: () => <Button />
                }}

            />
            <Screen
                name="Inbox"
                component={Home}
                options={{
                    title: 'Caixa de entrada',
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="chat" size={size} color={color} />
                    )
                }}
            />
            <Screen
                name="Profile"
                component={Home}
                options={{
                    title: 'Eu',
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="user" size={size} color={color} />
                    )
                }}
            />
        </Navigator>
    )
}

const styles = StyleSheet.create({
    AreaButton: {
        backgroundColor: '#fff',
        width: 50,
        height: 30,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 5,
        borderLeftColor: '#65d2e9',
        borderRightWidth: 5,
        borderRightColor: '#e6436e'
    }
})