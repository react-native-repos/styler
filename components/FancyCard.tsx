import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://reactjs.org/logo-og.png'
        }}
        style={styles.cardImage}
        />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>React Native</Text>
            <Text style={styles.cardLable}>React Native, App Development</Text>
            <Text style={styles.cardDescription}>React Native provides a unified way of managing images and other media assets in your Android and iOS apps </Text>
            <Text style={styles.cardFooter}>2 month course</Text>
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
    container:{
        flex:1,
        flexDirection: 'row',
    },
    card: {
       width: 350,
       height: 360,
       borderRadius: 6,
       marginHorizontal: 16,
       marginVertical: 12,

    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: {
            width:2,
            height: 2,
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 8,
    },
    cardTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    cardLable:{
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription:{
        color: '#242B2E',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,
        flexShrink: 1,
    },
    cardFooter:{},
    
})