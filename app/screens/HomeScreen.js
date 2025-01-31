import { View, Text } from 'react-native'
import React from 'react';
import Lottie from "lottie-react-native"


const HomeScreen = () => {
  return (
    <View>
      <Lottie
        source={require("../../assets/Animation - 1738226534865.json")}
        style={{
          height: responsiveHeight(55),
          width: responsiveWidth(110),
        }}
        autoPlay
        loop
      />
    </View>
  );
}

export default HomeScreen