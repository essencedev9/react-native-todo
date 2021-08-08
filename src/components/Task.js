import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { icons } from '../icons';

const Container = styled.View``;
const Contents = styled.Text``;

const Task = ({ text }) => {
  return (
    <Container>
      <IconButton icon={icons.uncheck} />
      <Contents>{text}</Contents>
      <IconButton icon={icons.edit} />
      <IconButton icon={icons.delete} />
    </Container>
  );
};

Task.PropTypes = {
  text: PropTypes.string.isRequired,
};

export default Task;
