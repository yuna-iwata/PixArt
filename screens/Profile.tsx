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
    background-color: ${({theme}) => theme.colors.shadowGreen};
  `;
  const StyledImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 20px;
  `;
  const StyledPixelArt = styled.Image`
    width: 370px;
    border-radius: 15px;
    height: 370px;
  `;
  const StyledHeart = styled.Image`
    width: 30px;
    height: 30px;
  `;
  const PixelText = styled.Text`
    font-family: VT323-Regular;
  `;

  const LargeText = styled(PixelText)`
    font-size: 36px;
  `;

  const LikesText = styled(PixelText)`
    font-size: 30px;
    color: ${({theme}) => theme.colors.secondaryText};
  `;

  const PronounsText = styled(PixelText)`
    font-size: 20px;
    color: ${({theme}) => theme.colors.secondaryText};
  `;

  const InfoText = styled(PixelText)`
    font-size: 15px;
    color: ${({theme}) => theme.colors.secondaryText};
  `;
  const Border = styled.View`
    background-color: ${({theme}) => theme.colors.shadowDarkGreen};
    border-radius: 15px;
    padding: 10px;
    width: 100%;
    gap: 20px;
    height: 115%;
  `;
  const LikesSection = styled.View`
    justify-content: flex-start;
    gap: 20px;
    flex-direction: row;
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
            parallaxScrollingScale: 0.6,
            parallaxScrollingOffset: 150,
            parallaxAdjacentItemScale: 0.5,
          }}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={() => (
            <Border>
              <StyledPixelArt source={require('../src/assets/Plant.png')} />
              <LikesSection>
                <StyledHeart
                  source={require('../src/assets/heart-filled.png')}
                />
                <LikesText>1,453</LikesText>
              </LikesSection>
            </Border>
          )}
        />
      </HorizontalScroll>
    </Root>
  );
};
