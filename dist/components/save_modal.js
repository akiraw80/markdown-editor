import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './button';
const Wrapper = styled.div `
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
const Modal = styled.div `
  background: #fff;
  padding: 1rem;
  width: 32rem;
`;
const TitleInput = styled.input `
  width: 29rem;
  padding: 0.5rem;
`;
const Control = styled.div `
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;
export const SaveModal = (props) => {
    console.log('render save_modal.tsx');
    const { onSave, onCancel } = props;
    const [title, setTitle] = useState(new Date().toISOString());
    return (React.createElement(Wrapper, null,
        React.createElement(Modal, null,
            React.createElement("p", null, "\u30C6\u30AD\u30B9\u30C8\u5185\u5BB9\u3092\u4FDD\u5B58\u3057\u307E\u3059"),
            React.createElement("p", null, "\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B\u3057\u3001\u4FDD\u5B58\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044"),
            React.createElement("p", null,
                React.createElement(TitleInput, { type: "text", value: title, onChange: (event) => setTitle(event.target.value) })),
            React.createElement(Control, null,
                React.createElement(Button, { onClick: onCancel, cancel: true }, "\u30AD\u30E3\u30F3\u30BB\u30EB"),
                React.createElement(Button, { onClick: () => onSave(title) }, "\u4FDD\u5B58")))));
};
