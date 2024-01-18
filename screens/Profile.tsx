import {View} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';

export const Profile = () => {
  const ProfileText = styled.Text`
    color: black;
  `;
  return (
    <View>
      <ProfileText>Profile</ProfileText>
    </View>
  );
};
