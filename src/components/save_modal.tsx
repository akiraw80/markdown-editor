import * as React from 'react';
import styled from 'styled-components';
import { Button } from './button';

const { useState } = React;

const Wrapper = styled.div`
  align-items: center;
  background-color: #0002;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Modal = styled.div`
  background: #fff;
  padding: 1rem;
  width: 32rem;
`;

const TitleInput = styled.input`
  width: 29rem;
  padding: 0.5rem;
`;

const Control = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

interface Props {
  onSave: (title: string) => void;
  onCancel: () => void;
}

export const SaveModal: React.FC<Props> = (props) => {
  const { onCancel, onSave } = props;
  return <div></div>;
};
