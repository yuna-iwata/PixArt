import styled from 'styled-components/native';
import {Text, View, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

export const Profile = () => {
  const Root = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.lightGreen};
  `;
  const ProfileView = styled.View`
    padding: 10px;
    background-color: ${({theme}) => theme.colors.lightestGreen};
    gap: 30px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    box-shadow: 10px 10px;
    shadow-color: ${({theme}) => theme.colors.shadowGreen};
  `;
  const HorizontalScroll = styled.View`
    margin-top: 50px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.shadowGreen};
  `;
  const StyledImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 20px;
  `;
  const StyledPixelArt = styled.Image`
    width: 100%;
    border-radius: 10px;
    height: 100%;
  `;
  const PixelText = styled.Text`
    font-family: VT323-Regular;
  `;

  const LargeText = styled(PixelText)`
    font-size: 36px;
  `;

  const PronounsText = styled(PixelText)`
    font-size: 20px;
    color: ${({theme}) => theme.colors.secondaryText};
  `;

  const InfoText = styled(PixelText)`
    font-size: 15px;
    color: ${({theme}) => theme.colors.secondaryText};
  `;
  const Test = styled.View`
    align-items: center;
  `;
  const width = Dimensions.get('window').width;

  return (
    <Root>
      <ProfileView>
        <StyledImage
          source={require('../src/assets/ProfilePicPlaceholder.png')}
        />
        <View>
          <LargeText>yunacorns</LargeText>
          <PronounsText>they/them</PronounsText>
          <InfoText>12 pixarts 12 followers 12 following</InfoText>
        </View>
      </ProfileView>
      <HorizontalScroll>
        <Carousel
          loop
          width={width}
          height={width}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={2000}
          autoPlayInterval={2000}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={() => (
            <Test>
              <StyledPixelArt source={require('../src/assets/Plant.png')} />
            </Test>
          )}
        />
      </HorizontalScroll>
    </Root>
  );
};
