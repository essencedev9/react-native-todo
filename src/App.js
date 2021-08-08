import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Text>TODO</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
