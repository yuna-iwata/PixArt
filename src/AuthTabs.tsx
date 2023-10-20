import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AuthTabs = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: 'blue',
          alignContent: 'center',
        }}>
        Auth
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default AuthTabs;
