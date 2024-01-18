import {View} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';

export const Home = () => {
  const HomeText = styled.Text`
    color: black;
  `;
  return (
    <View>
      <HomeText>Home</HomeText>
    </View>
  );
};
