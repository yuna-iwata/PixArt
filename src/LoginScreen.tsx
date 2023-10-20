import {Text, View, TextInput, StyleSheet} from 'react-native';

export default function LoginScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignContent: 'center',
    },
    text: {
      color: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <Text>login</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry={true} />
    </View>
  );
}
