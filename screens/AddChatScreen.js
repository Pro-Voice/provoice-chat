import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Image, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../firebase'
const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState("")

    const createChat = async () => {
        await db.collection("chats").add({
            chatName: input,
        }).then(() => {
            navigation.goBack();
        }).catch((error) => alert(error))

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add New Chat",
            headerBackTitle: "Chats",
            headerTitleAlign: "center",
        })

    }, [])

    return (
        <View style={styles.container}>
            <Input placeholder=" Add To Chat" autoFocus type="text" value={input} onChangeText={(text) => setInput
                (text)} leftIcon={
                    <Icon name="wechat" type="antdesign" size={24} color="black" />
                }
                onSubmitEditing={createChat}

            />

            <Button onPress={createChat} title="Create New Chat" />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",

    },
})
