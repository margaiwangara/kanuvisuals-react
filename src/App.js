import React from 'react';
import SimpleBar from 'simplebar-react';
import { createGlobalStyle } from 'styled-components';

// styles
import 'simplebar/src/simplebar.css';

// views / pages
import Home from '@/views/home/Home';

function App() {
  return (
    <main id="app">
      <GlobalStyle />
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Home />
      </SimpleBar>
    </main>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
}

body {
  --primaryColor: #e5e5e5;
  --accentColor: #444;
  --whiteColor: #ffffff;
  --blackColor: #000000;
  --greyColor: grey;
  --backgroundColor: #F6F6F6;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--whiteColor);
  font-family: 'Gilroy', Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

figure {
  display: flex;
  align-items: center;
}

#app {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}

`;
export default App;
