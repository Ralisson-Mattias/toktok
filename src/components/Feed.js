import { FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { Video } from 'expo-av'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import TextTicker from 'react-native-text-ticker'


const { width, height } = Dimensions.get('window')

export default ({ video, avatar, name, isPlay }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const [playing, setPlaying] = useState(true)
    const [buttonVisible, setButtonVisible] = useState(false)

    const videoRef = useRef(null)

    const handlePlayBack = () => {

        if (playing) {
            videoRef.current.pauseAsync()
            Animated.timing(fadeAnim, {
                toValue: 0.8,
                duration: 400,
                useNativeDriver: true
            }).start();
        } else {
            videoRef.current.playAsync()
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true
            }).start();
        }

        setPlaying(!playing)
    }

    return (

        <View>

            <>
                <TouchableWithoutFeedback style={{ width: width, height: height }} onPress={handlePlayBack}>
                    <Video
                        ref={videoRef}
                        source={{ uri: video }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ width: width, height: height - 48 }}
                    />
                </TouchableWithoutFeedback>

                <View style={styles.buttonsHeader}>
                    <TouchableOpacity style={styles.buttonHeader}>
                        <Text style={styles.buttonHeaderText}>Seguindo</Text>
                    </TouchableOpacity>

                    <View style={{
                        height: 12,
                        borderRightWidth: 1,
                        borderRightColor: '#ccc'
                    }} />

                    <TouchableOpacity style={styles.buttonHeader}>
                        <Text style={[styles.buttonHeaderText, { fontWeight: 'bold' }]}>Para você</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonsContainerArea}>
                        <TouchableOpacity style={styles.buttonProfile}>
                            <Image
                                source={avatar}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsContainerArea}>
                        <TouchableOpacity >
                            <FontAwesome name="heart" size={40} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.buttonNummber}>999</Text>
                    </View>

                    <View style={styles.buttonsContainerArea}>
                        <TouchableOpacity >
                            <FontAwesome name="commenting" size={40} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.buttonNummber}>999</Text>
                    </View>

                    <View style={styles.buttonsContainerArea}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="share" size={40} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.buttonNummber}>999</Text>
                    </View>

                    <View style={styles.buttonsContainerArea}>
                        <TouchableOpacity>
                            <FontAwesome5 name="compact-disc" size={50} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.areaFooter}>
                    <Text style={styles.areaFooterName}>{name}</Text>

                    <View style={styles.areaFooterMusic}>
                        <Fontisto name="music-note" size={24} color="#fff" />

                        <View style={{ marginLeft: 20 }}>
                            <TextTicker
                                style={{ fontSize: 18, color: '#fff' }}
                                duration={4000}
                                loop
                                bounce={false}
                                repeatSpacer={70}
                                marqueeDelay={1000}
                                shouldAnimateTreshold={40}
                            >
                                Som original - toktok
                    </TextTicker>
                        </View>


                    </View>
                </View>

                <Animated.View style={[styles.areaButtonPlayBack, { opacity: fadeAnim }]}>
                    <MaterialCommunityIcons name="play" size={140} color="#fff" />
                </Animated.View>
            </>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    buttonsContainerArea: {
        alignItems: 'center',
        marginTop: 15
    },
    buttonNummber: {
        color: '#fff',
        marginTop: 5
    },
    buttonProfile: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    buttonsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 20,
        left: '25%',
        right: '25%'
    },
    buttonHeader: {
        paddingHorizontal: 15,
    },
    buttonHeaderText: {
        color: '#fff',
        fontSize: 18
    },
    areaFooter: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    areaFooterName: {
        marginBottom: 15,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    areaFooterMusic: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    areaFooterMusicName: {
        color: '#fff',
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
        overflow: 'hidden'
    },


    areaButtonPlayBack: {
        position: 'absolute',
        top: height / 2.5,
        left: width / 3,
    }
})