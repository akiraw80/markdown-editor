import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/Editor';

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

const Main = (
  <React.Fragment>
    <GlobalStyle />
    <Editor/>
  </React.Fragment>)


render(Main, document.getElementById('app'))
