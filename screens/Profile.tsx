import styled from 'styled-components/native';
import React from 'react';
export const Profile = () => {
  const Root = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.lightGreen};
  `;
  const ProfileText = styled.Text`
    color: black;
  `;
  return (
    <Root>
      <ProfileText>Profile</ProfileText>
    </Root>
  );
};
