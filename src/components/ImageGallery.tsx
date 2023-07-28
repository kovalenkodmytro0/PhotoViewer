import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import {ACCES_KEY} from '../constants/constants';
import {COLORS} from '../constants/constants';
import Input from './Input';
import SearchButton from './SearchButton';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const isValidObjectField = obj => {
  return Object.values(obj).every(value => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

const containsOnlyNumbers = str => {
  return /^\d+$/.test(str);
};

const ImageGalleryScreen = () => {
  const [images, setImages] = useState(null);
  const [info, setInfo] = useState({
    category: '',
    quantity: '',
  });
  const [error, setError] = useState('');

  const {category, quantity} = info;

  const API_URL = `https://api.pexels.com/v1/search?query=${category}&orientation=portrait&size=small&per_page=${quantity}}`;

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

  const handleOnChnageText = (value, fieldName) => {
    setInfo({...info, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidObjectField(info))
      return updateError('Required all fields', setError);

    if (!containsOnlyNumbers(quantity)) {
      return updateError('Quantity should be a number', setError);
    }

    if (+quantity > 80) return updateError('Max quantity is 80', setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      setInfo({category, quantity});
      fetchImages();
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            autoCapitalize="none"
            placeholder="Search for photos"
            onChangeText={value => handleOnChnageText(value, 'category')}
            value={category}
            style={styles.input}
          />
          <Input
            autoCapitalize="none"
            placeholder="Quantity"
            maxLength={2}
            inputMode="numeric"
            onChangeText={value => handleOnChnageText(value, 'quantity')}
            value={quantity}
            style={styles.input}
          />
          <SearchButton title="Search" onPress={submitForm} />
        </View>
        {error ? <Text style={{color: COLORS.red}}>{error}</Text> : null}
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
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.darkBlue,
    borderRadius: 7,
    backgroundColor: COLORS.white,
    padding: 10,
    marginRight: 10,
  },
});

export default ImageGalleryScreen;
