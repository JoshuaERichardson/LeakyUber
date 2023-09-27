import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Panel from './components/panel';

export default function App() {
  return (
    <View style={styles.container}>
      <Panel 
        name="Music"
        color="red"    
    />    
      <Panel 
        name="About Driver"
        color="blue"
        />
      <Panel 
        name="Route"
        color="green"
        />    
      <Panel
        name="?"
        color="blue"
      />    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
  },
});
