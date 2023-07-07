import { 
    StyleSheet, 
    Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={styles.card} >
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
               learn javascript
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com019.jpg'
          }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer} >
            <Text numberOfLines={3}>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web.
            JavaScript is easy to learn.
            This tutorial will teach you JavaScript from basic to advanced.
            </Text>
        </View>
        <View style={styles.footerContainer} >
            <TouchableOpacity
            onPress={() => openWebsite('https://www.w3schools.com/js/')}>
            <Text style={styles.socialLinks} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/__._shriii_.__/')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 340,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 12,
        backgroundColor: '#F08080',
        elevation: 3,
        marginRight:8
       
    },
   
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})
