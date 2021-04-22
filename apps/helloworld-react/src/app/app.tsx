import styled from 'styled-components';

import { LibReact } from '@lib/react';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

  main {
    padding: 0 36px;
  }

  p {
    text-align: center;
  }

  my-greeting {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    margin: 40px 0 10px 0;
  }
`;

export function App() {
  return (
    <StyledApp>

      <header>
        
        <my-greeting title="Hello World"></my-greeting>

        <h2>You are in an React project!!!</h2>

      </header>

      <main>
        
        <p>main</p>

        <LibReact></LibReact>

      </main>

      <footer>
        
        <p>footer</p>

      </footer>

    </StyledApp>
  );
}

export default App;
