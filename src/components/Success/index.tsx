import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SuccessImage from '../../assets/success.png';
import { Copyright } from '../Copyright';
import { styles } from './styles';

interface SuccessProps {
  onRestartButtonPress: () => void;
}

export function Success({ onRestartButtonPress }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={SuccessImage} />
      <Text style={styles.title}>Agradecemos o feedback!</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onRestartButtonPress}
      >
        <Text style={styles.buttonText}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
