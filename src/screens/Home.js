import { FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { Video } from 'expo-av'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import Drone from '../../assets/videos/Drone.mp4'
import Perfil from '../../assets/images/tiktokperfil.jpg'
import Feed from '../components/Feed'
import ViewPager from '@react-native-community/viewpager'
import TextTicker from 'react-native-text-ticker'

const { width, height } = Dimensions.get('window')

export default () => {

    const [selected, setSelected] = useState(0)

    const [data, setData] = useState([
        {
            id: 1,
            video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            name: '@tiktok',
            avatar: Perfil
        },
        {
            id: 2,
            video: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
            name: '@taktak',
            avatar: Perfil
        }
    ])

    return (
        <>
            <StatusBar />
            <ViewPager
                style={styles.viewPager}
                initialPage={0}
                orientation='vertical'
                onPageSelected={e => setSelected(e.nativeEvent.position)}
            >
                {data.map((item, key) => (
                    <SafeAreaView style={{ flex: 1 }} key={key}>
                        <Feed
                            video={item.video}
                            name={item.name}
                            avatar={Perfil}
                            isPlay={selected === key}
                        />
                    </SafeAreaView >
                ))}
            </ViewPager>
        </>
    )
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});