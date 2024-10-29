import React from 'react'
import './App.css'

import { Header } from '@ancient8/components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br />
        <br />

        {/*<Header*/}
        {/*  config={{*/}
        {/*    search: {*/}
        {/*      baseUrl: '',*/}
        {/*      accessToken: '',*/}
        {/*    },*/}
        {/*  }}*/}
        {/*/>*/}
      </header>
    </div>
  )
}

export default App
