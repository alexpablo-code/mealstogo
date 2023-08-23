import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: 'green', padding: 16 }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue', padding: 16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'tan',
  },
})
