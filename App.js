import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, Linking  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Vellore Institure Of Technology</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Image source={{ uri: 'https://images.shiksha.com/mediadata/images/1664721059phpQKCqHM.jpeg' }} style={{ width: 400, height: 200 }} />
          <Button
            title="VIT Vellore"
            onPress={() => {
              const url = 'https://vit.ac.in/';
              Linking.openURL(url);
            }}
            color="#841584" // Optional: Custom button color
            accessibilityLabel="VIT Vellore"
          />
        </View>
        <View style={styles.cell}>
          <Image source={{ uri: 'https://chennai.vit.ac.in/wp-content/uploads/2020/03/campus-banner.jpg' }} style={{ width: 400, height: 200 }} />
          <Button
            title="VIT Chennai"
            onPress={() => {
              const url = 'https://chennai.vit.ac.in/';
              Linking.openURL(url);
            }}
            color="#841584" // Optional: Custom button color
            accessibilityLabel="VIT Chennai"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Image source={{ uri: 'https://cache.careers360.mobi/media/article_images/2022/7/9/VIT-Bhopal-Academic-Block.jpg' }} style={{ width: 400, height: 200 }} />
          <Button
            title="VIT Bhopal"
            onPress={() => {
              const url = 'https://vitbhopal.ac.in/';
              Linking.openURL(url);
            }}
            color="#841584" // Optional: Custom button color
            accessibilityLabel="VIT Bhopal"
          />
        </View>
        <View style={styles.cell}>
          <Image source={{ uri: 'https://vitap.ac.in/wp-content/uploads/2021/07/Areal-View-Campus.jpeg' }} style={{ width: 400, height: 200 }} />
          <Button
            title="VIT AP"
            onPress={() => {
              const url = 'https://vitap.ac.in/';
              Linking.openURL(url);
            }}
            color="#841584" // Optional: Custom button color
            accessibilityLabel="VIT AP"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123456',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    // width: '50%',
    // height: '50%',
    margin: '40px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    color: '#fff',
  },
  titleText: {
    color: '#fff',
    fontSize: "40px",
  }
});
