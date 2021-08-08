import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';
import Task from './components/Task';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export default function App() {
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    alert(newTask);
    setNewTask('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>TODO List</Title>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={text => setNewTask(text)}
          onSubmitEditing={addTask}
        />
        <List>
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
          <Task text="React Native" />
        </List>
      </Container>
    </ThemeProvider>
  );
}
