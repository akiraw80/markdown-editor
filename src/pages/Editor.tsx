import React from 'react'
import styled from 'styled-components'
import {useStateWithStorage} from '../hooks/use_state_with_storage'

const StorageKey: string = 'page/editor:text';


export const Editor: React.FC = () => {
  const [text, setText] = useStateWithStorage('', StorageKey);
  
  return (
    <React.Fragment>
      <Header>
        Markdown Editor
      </Header>
      <Wrapper>
        <TextArea value={text} onChange={(ev) => setText(ev.target.value)}/>
        <Preview>プレビューエリア</Preview>
      </Wrapper>
    </React.Fragment>
  )
}

const Header = styled.header`
  font-size: 1.5rem;
  height: 2rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
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
