import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

import BottomTab from './navigator'


export default () => {
    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
    )
}