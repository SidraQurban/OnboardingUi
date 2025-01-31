import { View, Text } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from "lottie-react-native"
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <View>
              <Lottie
                source={require("../../assets/Animation - 1738225211789.json")}
                style={{
                  height: responsiveHeight(50),
                  width: responsiveWidth(70),
                }}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Track Your Crypto",
          subtitle:
            "Track and buy cryptocurrencies at real value,tarde with easeand confidence in one safe and fast application",
        },
        {
          backgroundColor: "#fff",
          image: (
            <View>
              <Lottie
                source={require("../../assets/Animation - 1738225211789.json")}
                style={{
                  height: responsiveHeight(50),
                  width: responsiveWidth(70),
                }}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Explore Best Coins",
          subtitle:
            "All cryptos go through a rigorous evaluation process and are compared to thousands of other crypto projects",
        },
        {
          backgroundColor: "#fff",
          image: (
            <View>
              <Lottie
                source={require("../../assets/Animation - 1738225211789.json")}
                style={{
                  height: responsiveHeight(50),
                  width: responsiveWidth(70),
                }}
                autoPlay
                loop
              />
            </View>
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
}

export default OnboardingScreen