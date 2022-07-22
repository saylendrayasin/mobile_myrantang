import React, {useState, useEffect} from 'react';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import geolocation from '@react-native-community/geolocation';
// import {position} from 'native-base/lib/typescript/theme/styled-system';

const CARD_WIDTH = Dimensions.get('window').width;
const CARD_HEIGHT = Dimensions.get('window').height;

export default function Explore() {
  const [alatitude, setLatitude] = useState('10');
  const [alongitude, setLongitude] = useState('10');
  // const [err, setErr] = null;

  // function getlocations() {
  //   async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Cool Photo App Camera Permission',
  //           message:
  //             'Cool Photo App needs access to your camera ' +
  //             'so you can take awesome pictures.',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('You can use the camera');

  //         geolocation.getCurrentPosition(position => {
  //           alert(JSON.stringify(position));
  //           setLatitude(JSON.stringify(position.coords.latitude));
  //           setLongitude(JSON.stringify(position.coords.longitude));
  //           // setLatitude({alatitude: position.coords.latitude});
  //           // setLongitude({alongitude: position.coords.longitude});
  //         });
  //       } else {
  //         console.log('Camera permission denied');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };
  // }

  useEffect(() => {
    // getlocations();

    (async () => {
      // try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');

        geolocation.getCurrentPosition(position => {
          alert(JSON.stringify(position));
          setLatitude(JSON.stringify(position.coords.latitude));
          setLongitude(JSON.stringify(position.coords.longitude));
          // setLatitude({alatitude: position.coords.latitude});
          // setLongitude({alongitude: position.coords.longitude});
        });
      } else {
        console.log('Camera permission denied');
      }
      // } catch (err) {
      // console.warn(err);
      // }
    })();
  }, []);
  return (
    <View styles={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        showsUserLocation={true}
        onUserLocationChange={e => {
          setLatitude(JSON.stringify(e.nativeEvent.coordinate.latitude));
          setLongitude(JSON.stringify(e.nativeEvent.coordinate.longitude));
          //   // setLatitude(e.nativeEvent.coordinate.latitude);
          //   // setLongitude(e.nativeEvent.coordinate.longitude);
        }}
        region={{
          latitude: parseFloat(alatitude),
          longitude: parseFloat(alongitude),
          // latitude: alatitude,
          // longitude: alongitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }}>
        <Marker
          coordinate={{
            latitude: parseFloat(alatitude),
            longitude: parseFloat(alongitude),
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="blue"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);

            // setLatitude(JSON.stringify(e.nativeEvent.coordinate.latitude));
            // setLongitude(JSON.stringify(e.nativeEvent.coordinate.longitude));
          }}>
          <Callout>
            <Text>Location Pin</Text>
          </Callout>
        </Marker>

        <Circle
          center={{
            latitude: parseFloat(alatitude),
            longitude: parseFloat(alongitude),
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          radius={100}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  map: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});
