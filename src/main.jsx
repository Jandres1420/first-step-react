import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppWithProperty } from './AppWithProperty'
import CounterApp from './CounterApp'
import { FirstApp } from './FirstApp'
import { HelloWorldApp } from './HelloWorldApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <HelloWorldApp />
      <FirstApp/>
      <AppWithProperty  number = {13} />
      <CounterApp value = {100}/>
      
    </>
  </React.StrictMode>
);

