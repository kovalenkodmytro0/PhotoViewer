import React, {useState, useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {ACCES_KEY, API_URL} from './src/constants/config';

const getImages = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Autorization: ACCES_KEY,
    },
  });
  const {photos} = await data.json();
  return photos;
};

function App(): JSX.Element {
  const [images, setImages] = useState(null);
  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImages();
    };

    fetchImages();
  }, []);

  if (!images) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.body}>
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <Image
              source={{uri: item.source.portrait}}
              style={[StyleSheet.absoluteFillObject]}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
