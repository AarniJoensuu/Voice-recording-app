import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { RecordButton } from "./src/components/buttons";
import { appStyles } from "./src/styles";

export default function App() {
  return (
    <View style={appStyles.container}>
      <StatusBar style="light" hidden={false} backgroundColor={"black"} />
      <View style={appStyles.recordButton} >
        <RecordButton />
      </View>
    </View>
  );
}
