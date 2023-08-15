import React, {useState} from 'react';
import {FlatList, ImageBackground, View, Text} from 'react-native';
import {ACCES_KEY} from '../../constants/constants';
import Input from '../Input';
import SearchButton from '../SearchButton';
import {styles} from './styles';
import {
  containsOnlyNumbers,
  isValidObjectField,
  updateError,
} from '../../utils/generalUtils';
import {COLORS} from '../../styles/colors';
import {Image} from '../../types/imageTypes';

const ImageGalleryScreen = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  const getImages = async (category: string, quantity: string) => {
    const API_URL = `https://api.pexels.com/v1/search?query=${category}&orientation=portrait&size=small&per_page=${quantity}}`;
    const data = await fetch(API_URL, {
      headers: {
        Authorization: ACCES_KEY,
      },
    });
    const {photos} = await data.json();
    setImages(photos);
  };

  const isValidForm = () => {
    if (!isValidObjectField(category, quantity))
      return updateError('Required all fields', setError);

    if (!containsOnlyNumbers(quantity)) {
      return updateError('Quantity should be a number', setError);
    }

    if (+quantity > 80) return updateError('Max quantity is 80', setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      updateError('', setError);
      getImages(category, quantity);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            autoCapitalize="none"
            placeholder="Search for photos"
            onChangeText={setCategory}
            value={category}
            style={styles.input}
          />
          <Input
            autoCapitalize="none"
            placeholder="Quantity"
            maxLength={2}
            inputMode="numeric"
            onChangeText={setQuantity}
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

export default ImageGalleryScreen;
