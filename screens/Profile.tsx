import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import React from 'react';
import ProfilePicPlaceholder from '../src/assets/ProfilePicPlaceholder.png';

export const Profile = () => {
  const Root = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.lightGreen};
  `;
  const ProfileView = styled.View`
    padding: 20px;
    background-color: ${({theme}) => theme.colors.lightestGreen};
    gap: 30px;
    border-radius: 20px;
    flex-direction: row;
    box-shadow: 10px 10px;
    shadow-color: ${({theme}) => theme.colors.shadowGreen};
  `;
  const ProfilePic = styled.View`
    padding: 20px;
    border-radius: 20px;
    background-color: pink;
  `;
  const HorizontalScroll = styled.View`
    margin-top: 50px;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.shadowGreen};
  `;
  const StyledImage = styled.Image`
    width: 60px;
    border-radius: 20px;
    height: 60px;
  `;

  return (
    <Root>
      <ProfileView>
        <StyledImage
          source={require('../src/assets/ProfilePicPlaceholder.png')}
        />
        <View>
          <Text>yunacorns</Text>
          <Text>they/them</Text>
          <Text>12 pixarts 12 followers 12 following</Text>
        </View>
      </ProfileView>
      <HorizontalScroll>
        <ProfilePic />
      </HorizontalScroll>
    </Root>
  );
};
