import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes'


function App() {

  return (

    <div id='root'>

      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <Routes />
      </BrowserRouter>
    </div>

  )
}

export default App
