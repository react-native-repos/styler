import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function ActionCard() {
    // type script way
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)   
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in javascript 21 - es12
            </Text>
        </View>
        
            <Image 
                source={{
                    uri: 'https://reactjs.org/logo-og.png',
                    
                }}
                style={styles.cardImage}
            />
            <View  style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam velit odit hic dolore laudantium, harum soluta enim praesentium animi provident perspiciatis dolorum nesciunt aliquid minima itaque sint quo doloremque cumque! Maiores animi deserunt, officiis tenetur quaerat reiciendis?
                </Text>
            </View>

            <View  style={styles.footerContainer}>
                <TouchableOpacity
                onPress={() => openWebsite('https://reactjs.org/')}
                >
                    <Text style={styles.socialLink}>Read More</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress={() => openWebsite('https://reactjs.org/')}
                >
                    <Text style={styles.socialLink}>Follow me</Text>
                </TouchableOpacity>

            </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'white',
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12,
    },
    elevatedCard: {
        backgroundColor: '#F0A04B',
        elevation: 3,
        shadowOffset: {
            width:2,
            height: 2,
        }
    },
    headingContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 16,
        color: 'white',
        height: 30,
        
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    bodyContainer: {
        margin: 8,
    },
    footerContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    socialLink: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 16,
        padding: 8,
        borderRadius: 8
        
    },
})