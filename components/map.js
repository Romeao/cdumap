import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: -12.3720052,
        longitude: 130.8680618,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }}
    >

    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map