import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', backgroundColor: 'tan'}}>
      <Text style={{backgroundColor:'green', paddingVertical:4}}>Search</Text>
      <Text style={{flex:.8, backgroundColor:'blue', paddingVertical:4}}>List</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
