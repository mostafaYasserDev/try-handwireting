import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TracingBoard() {
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={require('../assets/index.html')}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
        allowFileAccess
        allowUniversalAccessFromFileURLs
        androidHardwareAccelerationDisabled={false}
        androidLayerType="hardware"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});


