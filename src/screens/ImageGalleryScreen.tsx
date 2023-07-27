import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import {ACCES_KEY} from '../constants/constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ImageGalleryScreen = () => {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState('');
  const [quantity, setQuantity] = useState('');

  const API_URL = `https://api.pexels.com/v1/search?query=${query}&orientation=portrait&size=small&per_page=${quantity}}`;

  const getImages = async () => {
    const data = await fetch(API_URL, {
      headers: {
        Authorization: ACCES_KEY,
      },
    });
    const {photos} = await data.json();
    return photos;
  };

  const fetchImages = async () => {
    const images = await getImages();
    setImages(images);
  };

  // if (!images) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <View style={styles.body}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="e.g. Ocean, Tigers"
          onChangeText={query => setQuery(query)}
          onFocus={() => setQuery('')}
          value={query}
        />
        <TextInput
          style={styles.input}
          inputMode="numeric"
          placeholder=""
          maxLength={2}
          onChangeText={quantity => setQuantity(quantity)}
          value={quantity}
        />
        <Button title="Search" onPress={() => fetchImages()}></Button>
      </View>
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View>
              <ImageBackground
                source={{uri: item.src.portrait}}
                style={styles.image}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {},
  image: {
    width: deviceWidth,
    height: deviceHeight,
  },
  inputContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: deviceWidth - 250,
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});

export default ImageGalleryScreen;
