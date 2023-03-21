import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppWithProperty } from './AppWithProperty'
import { FirstApp } from './FirstApp'
import { HelloWorldApp } from './HelloWorldApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <HelloWorldApp />
      <FirstApp/>
      <AppWithProperty title="Hola desde main" number = {13} />
    </>
  </React.StrictMode>
);

