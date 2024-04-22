import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes'
import Footer from './screens/Footer/Footer';

function App() {

  return (

    <div >
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes />

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>

  )
}

export default App
