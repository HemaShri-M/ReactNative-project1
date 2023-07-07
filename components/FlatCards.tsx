import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cardssss</Text>
      <View style={styles.container}>
        <View style={[styles.cards,styles.cardone]}>
            <Text >PINK</Text>
        </View>
        <View style={[styles.cards,styles.cardtwo]}>
            <Text >BLUE</Text>
        </View>
        <View style={[styles.cards,styles.cardthree]}>
            <Text >YELLOW</Text>
        </View>
        <View style={[styles.cards,styles.cardone]}>
            <Text >PINK</Text>
        </View>
      </View>
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
        height:100
    },
    cardone:{
        backgroundColor:'#FF69b4'
    },
    cardtwo:{
        backgroundColor:'#00BFFF'
    },
    cardthree:{
        backgroundColor:'#FFFF00'
    }

})