import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
    const onSigninFacebook = () => {
      console.warn("facebook");
    };

    const onSigninGoogle = () => {
      console.warn("Google");
    };

    const onSigninApple = () => {
      console.warn("Apple");
    };

    const onSignUpPressed = () => {
      console.warn("Sign Up Pressed");
    };
  
  
    return (
    <>
      <CustomButton
        bgColor="#e7eaf4"
        fgColor="#4765a9"
        onPress={onSigninFacebook}
        text="Login with Facebook"
      />
      <CustomButton
        bgColor="#fae9ea"
        fgColor="#dd4d44"
        onPress={onSigninGoogle}
        text="Login with Google"
      />
      <CustomButton
        bgColor="#e3e3e3"
        fgColor="#363636"
        onPress={onSigninApple}
        text="Login with Apple"
      />
    </>
  );
}

export default SocialSignInButtons

