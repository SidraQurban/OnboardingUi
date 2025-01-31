import { View, Text } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from "lottie-react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const handleDone = () => {
        // Navigate to the home screen
        navigation.navigate("HomeScreen");
    }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Onboarding
        containerStyles={{ paddingHorizontal: responsiveWidth(1) }}
        pages={[
          {
            backgroundColor: "#c7f9cc",
            image: (
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
            ),
            title: (
              <View>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.8),
                    fontWeight: "bold",
                    marginTop: responsiveHeight(-17),
                  }}
                >
                  Multi-channel Payment
                </Text>
              </View>
            ),
            subtitle: (
              <Text
                style={{
                  fontSize: responsiveFontSize(2.1),

                  marginTop: responsiveHeight(-11),
                  color: "gray",
                  paddingHorizontal: responsiveWidth(7),
                }}
              >
                Allows you to pay online at all applications and websites that
                accept MasterCard cards.
              </Text>
            ),
          },
          {
            backgroundColor: "#ff9ebb",
            image: (
              <View>
                <Lottie
                  source={require("../../assets/Animation - 1738227390541.json")}
                  style={{
                    height: responsiveHeight(55),
                    width: responsiveWidth(110),
                  }}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.8),
                    fontWeight: "bold",
                    marginTop: responsiveHeight(-17),
                  }}
                >
                  All Free
                </Text>
              </View>
            ),
            subtitle: (
              <Text
                style={{
                  fontSize: responsiveFontSize(2.1),

                  marginTop: responsiveHeight(-11),
                  color: "gray",
                  paddingHorizontal: responsiveWidth(7),
                }}
              >
                Deposits and payments are completely free. No insurance fee,
                annual fee
              </Text>
            ),
          },
          {
            backgroundColor: "#fedc97",
            image: (
              <View>
                <Lottie
                  source={require("../../assets/Animation - 1738227535839.json")}
                  style={{
                    height: responsiveHeight(55),
                    width: responsiveWidth(110),
                    marginLeft: responsiveWidth(10),
                  }}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: (
              <View>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.8),
                    fontWeight: "bold",
                    marginTop: responsiveHeight(-17),
                  }}
                >
                  Security
                </Text>
              </View>
            ),
            subtitle: (
              <Text
                style={{
                  fontSize: responsiveFontSize(2.1),

                  marginTop: responsiveHeight(-11),
                  color: "gray",
                  paddingHorizontal: responsiveWidth(7),
                }}
              >
                Two-Factor Authentication; OTP Authentication and MSC security
                code.
              </Text>
            ),
          },
        ]}
      />
    </View>
  );
}

export default OnboardingScreen