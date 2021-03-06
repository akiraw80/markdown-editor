import React, { useState } from 'react';
import styled from 'styled-components';
import { useStateWithStorage } from '../hooks/use_state_with_storage';
import ReactMarkdown from 'react-markdown';
import { putMemo } from '../indexeddb/memos';
import { Button } from '../components/button';
import { SaveModal } from '../components/save_modal';
import { Link } from 'react-router-dom';

const StorageKey: string = 'page/editor:text';

export const Editor: React.FC = () => {
  console.log('render Editor.tsx');
  const [text, setText] = useStateWithStorage('', StorageKey);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header>
        Markdown Editor
        <HeaderControl>
          <Button onClick={() => setShowModal(true)}>保存する</Button>
          <Link to="/history">
            履歴を見る
          </Link>
        </HeaderControl>
      </Header>
      <Wrapper>
        <TextArea value={text} onChange={(ev) => setText(ev.target.value)} />
        <Preview>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Preview>
      </Wrapper>
      {showModal && (
        <SaveModal
          onSave={(title: string): void => {
            putMemo(title, text);
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        ></SaveModal>
      )}
    </>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  height: 2rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`;

const HeaderControl = styled.div`
  height: 2rem;
  display: flex;
  align-content: center;
`;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`;
const TextArea = styled.textarea`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50vw;
  border-right: 10px solid silver;
  border-top: 10px solid silver;
  font-size: 1rem;
  padding: 0.5rem;
`;
const Preview = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50vw;
  overflow-y: scroll;
  border-top: 10px solid silver;
`;
