import React, { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const ChatScreen = ({ navigation, route }) => {


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerTitle: () => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Avatar source={{ uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png" }} />
                    <Text style={{ color: "white", marginLeft: 10, fontWeight: "700", textTransform: "capitalize" }} >{route.params.chatName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity style={{
                    margin: 10,
                }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity >
                        <FontAwesome name="video-camera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Ionicons name="call" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="light" />
            <Text >{route.params.chatName}</Text>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
