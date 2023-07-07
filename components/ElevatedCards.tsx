import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.cards}>
            <Text>Tap</Text>
        </View>
        <View style={styles.cards}>
            <Text>me</Text>
        </View>
        <View style={styles.cards}>
            <Text>for</Text>
        </View>
        <View style={styles.cards}>
            <Text>more</Text>
        </View>
        <View style={styles.cards}>
            <Text>click</Text>
        </View>
        <View style={styles.cards}>
            <Text>on</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        paddingHorizontal:8,
        fontWeight:"bold"
    },
    container:{
        flex:1,
        flexDirection:"row",
        padding:8
    },
    cards:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        margin:3,
        width:100,
        height:100,
        backgroundColor:"#98FB98",
        elevation:5
    }
})