import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
const CustomListItem = () => {
    return (
        <ListItem>
            <Avatar rounded source={{ uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png" }} />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>kiran bhat</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae architecto incidunt explicabo dolorem aliquam animi amet accusantium autem. Debitis reprehenderit nesciunt dolorum minima distinctio mollitia assumenda dolorem odio sapiente.</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
