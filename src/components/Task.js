import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { icons } from '../icons';
import Input from './Input';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0%;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme, compledted }) => (compledted ? theme.done : theme.text)};
  text-decoration-line: ${({ compledted }) =>
    compledted ? 'line-through' : 'none'};
`;

const Task = ({ item, deleteTask, toggleTask, updateTask }) => {
  const [IsEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _onSubmit = () => {
    if (IsEditing) {
      const updateItem = Object.assign({}, item);
      updateItem['text'] = text;
      setIsEditing(false);
      updateTask(updateItem);
    }
  };

  return IsEditing ? (
    <Input
      value={text}
      onChangeText={text => setText(text)}
      onSubmitEditing={_onSubmit}
      onBlur={() => {
        setText(item.text);
        setIsEditing(false);
      }}
    />
  ) : (
    <Container>
      <IconButton
        icon={item.compledted ? icons.check : icons.uncheck}
        item={item}
        onPress={toggleTask}
      />
      <Contents compledted={item.compledted}>{item.text}</Contents>
      {item.compledted || (
        <IconButton icon={icons.edit} onPress={() => setIsEditing(true)} />
      )}
      <IconButton icon={icons.delete} item={item} onPress={deleteTask} />
    </Container>
  );
};

Task.PropTypes = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;
