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
          // latitude: -0.8917,
          // longitude: 119.8707,
          latitudeDelta: 0.005,
          longitudeDelta: 0.5,
        }}>
        <Marker
          coordinate={{
            latitude: 37.300195804019445,
            longitude: -121.78449667990209,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);

            // setLatitude(JSON.stringify(e.nativeEvent.coordinate.latitude));
            // setLongitude(JSON.stringify(e.nativeEvent.coordinate.longitude));
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 37.27389620100425,
            longitude: -121.98677580803631,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);

            // setLatitude(JSON.stringify(e.nativeEvent.coordinate.latitude));
            // setLongitude(JSON.stringify(e.nativeEvent.coordinate.longitude));
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
          </Callout>
        </Marker>

        {/* Bitung */}
        <Marker
          coordinate={{
            latitude: 1.440374,
            longitude: 125.121652,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
          </Callout>
        </Marker>

        {/* Minahasa Utara */}
        <Marker
          coordinate={{
            latitude: 1.216884,
            longitude: 124.818259,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
          </Callout>
        </Marker>

        {/* Bali */}
        <Marker
          coordinate={{
            latitude: 1.216884,
            longitude: 115.171127,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
          </Callout>
        </Marker>

        {/* Jakarta */}
        <Marker
          coordinate={{
            latitude: -6.121435,
            longitude: 106.774124,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
          </Callout>
        </Marker>

        {/* Balikpapan */}
        <Marker
          coordinate={{
            latitude: -1.265386,
            longitude: 116.8312,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
          </Callout>
        </Marker>

        {/* Aceh */}
        <Marker
          coordinate={{
            latitude: 4.695135,
            longitude: 96.749397,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
          </Callout>
        </Marker>

        {/* Jayapura */}
        <Marker
          coordinate={{
            latitude: -2.53371,
            longitude: 140.71813,
            // latitude: alatitude,
            // longitude: alongitude,
          }}
          pinColor="#78CE34"
          draggable={true}
          onDragStart={e => {
            console.log('Drag Start: ', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            console.log('Drag End: ', e.nativeEvent.coordinate);
          }}>
          <Callout style={{justifyContent: 'center'}}>
            <Text>Outlet</Text>
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
