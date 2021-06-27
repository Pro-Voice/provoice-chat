import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Text } from 'react-native-elements'
import { useLayoutEffect } from 'react'
import { auth } from '../firebase'


const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to login",
        })
    }, [navigation])


    const Register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                })
            })
            .catch((error) => alert(error))


    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }} >Create Signal Account</Text>

            <View style={styles.inputContainer}>

                <Input type="text" placeholder="Full Name" autoFocus value={name} onChangeText={(text) => setName(text)} />
                <Input type="email" placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input type="password" placeholder="Password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
                <Input type="text" placeholder="Profile Picture URL (optional)" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={Register} />

            </View>

            <Button containerStyle={styles.button} raised onPress={Register} title="Register" />
            <View style={{ height: 100 }}></View>

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: "white",
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
