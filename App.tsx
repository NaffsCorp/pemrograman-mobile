import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Alert,
  Linking,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import {styles} from './src/styles/AppStyles';
import {AppState} from './src/types/Mahasiswa';
import {dataMahasiswa} from './src/data/Mahasiswa';

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      header: 'Home',
      value: true,
      username: '',
      dataMahasiswa: dataMahasiswa,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor={'#09bd75'} />

        <View style={styles.imagecontainer}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            {this.state.header}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.image}
          onPress={() =>
            Alert.alert('Information', 'Anda akan menghapus gambar ini?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ])
          }>
          <ImageBackground
            style={{
              width: 300,
              height: 300,
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 20,
            }}
            source={require('./src/images/beautiful-anime-character-cartoon-scene.jpg')}>
            <Text style={{color: 'white', fontSize: 15}}>React-Native</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://www.prinafsika.world')}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Open Website
          </Text>
        </TouchableOpacity>

        <FlatList
          style={{flex: 1, paddingTop: 20}}
          data={this.state.dataMahasiswa}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.flatListItem}
              onPress={() =>
                ToastAndroid.show(item.namaMhs + ' di klik', ToastAndroid.SHORT)
              }>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                {item.namaMhs}
              </Text>
              <Text style={{color: 'white'}}>{item.npmMhs}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.npmMhs}
        />
      </View>
    );
  }
}

export default App;
