import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import Lottie from "lottie-react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const HomeScreen = () => {
  
  return (
    <View>
      <Lottie
        source={require("../../assets/Animation - 1738226708840.json")}
        style={{
          height: responsiveHeight(90),
          width: responsiveWidth(100),
        }}
        autoPlay
        loop
      />
      <TouchableOpacity 
      onPress={() => navigation.navigate("OnboardingScreen")}
        style={{
          backgroundColor: "green",
          height: responsiveHeight(6),
          width: responsiveHeight(15),
          marginTop: responsiveHeight(-32),
          alignSelf: "center",
          borderRadius: responsiveHeight(8),
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: responsiveFontSize(2.4),
            fontWeight: "bold",
            marginTop:responsiveHeight(1)
          }}
        >
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen