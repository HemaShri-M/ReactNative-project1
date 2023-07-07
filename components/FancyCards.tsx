import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.heading}>Fancy Cards</Text>
      <View style={styles.cards}>
        <Image source={{
            uri:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg"}}
            style={styles.imagestyle}></Image>
            <View style={styles.cardbody}>
              <Text style={styles.cardtitle}>Taj Mahal</Text>
              <Text style={styles.cardlabel}>Agra,Delhi</Text>
              <Text style={styles.carddescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, 
              Uttar Pradesh, India.
              </Text>
              <Text style={styles.cardfooter}>20 mins away</Text>
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
    imagestyle:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cards:{
      width:340,
      height:360,
      marginHorizontal:12,
      marginVertical:12,
      backgroundColor:"#000000",
      borderRadius:6,
      elevation:5
    },
    cardbody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:12
    },
    cardtitle:{
      color:"#FFFFFF",
      fontSize:22,
      fontWeight:"bold",
      marginBottom:4
    },
    cardlabel:{
      color:"#FFFFFF",
      fontSize:14,
      marginBottom:6
    },
    carddescription:{
     color:"#FFFFFF",
     fontSize:12,
     marginBottom:12,
     marginTop:6
    },
    cardfooter:{
      color:"#FFFFFF"
    },
})