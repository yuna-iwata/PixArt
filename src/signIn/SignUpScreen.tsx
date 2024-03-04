import styled from 'styled-components/native';
import React, {useCallback} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useMutation, gql} from '@apollo/client';

const SIGN_UP_MUTATION = gql`
  mutation Mutation($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      token
    }
  }
`;

const SignUpScreen = () => {
  const UsernameInput = styled.TextInput`
    height: 30px;
    border-color: black;
    border-width: 1px;
    width: 80%;
  `;

  const SignUpButton = styled.TouchableOpacity`
    height: 20px;
    width: 80%;
    background: #04aa6d;
    color: white;
  `;

  const ButtonText = styled.Text`
    color: white;
  `;
  const [signUp, {data, error, loading}] = useMutation(SIGN_UP_MUTATION);

  console.log(data);
  console.log(error);
  const onSignUp = useCallback(() => {
    signUp({
      variables: {
        registerInput: {
          username: 'miles morales',
          password: 'password',
          confirmPassword: 'password',
          email: 'miles@spiderman.com',
        },
      },
    });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <UsernameInput placeholder="Username" />
      <UsernameInput placeholder="Password" />
      <SignUpButton onPress={onSignUp} disabled={loading}>
        {loading && <ActivityIndicator />}
        <ButtonText>Sign Up</ButtonText>
      </SignUpButton>
    </View>
  );
};

export default SignUpScreen;
