import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import {ACCES_KEY} from '../constants/constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const API_URL = `https://api.pexels.com/v1/search?query=mountains&orientation=portrait&size=small&per_page=5`;

const ImageGalleryScreen = () => {
  const [images, setImages] = useState(null);
  const [text, setChangeText] = useState('');

  const onChangeText = (query: string) => {
    setChangeText(query);
  };

  const getImages = async () => {
    const data = await fetch(API_URL, {
      headers: {
        Authorization: ACCES_KEY,
      },
    });
    const {photos} = await data.json();
    return photos;
  };

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImages();
      setImages(images);
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ocean, Tigers, Pears"
          onChangeText={onChangeText}
          value={text}
        />
      </View>
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
    position: 'absolute',
    top: 50,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },
  input: {
    width: deviceWidth - 50,
    height: 50,
    borderWidth: 1,
    padding: 10,
  },
});

export default ImageGalleryScreen;
