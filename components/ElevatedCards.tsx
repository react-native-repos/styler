import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
        
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textColor}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textColor}>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textColor}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.textColor}>More..</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😂</Text>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
      padding: 8,
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      margin: 8,
      borderRadius: 4,
    },
    textColor: {
        color:'black',
    },
    cardElevated: {
      backgroundColor: '#CAD5E2',
      // elevation: 4,
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowColor: 'red',
    }
})