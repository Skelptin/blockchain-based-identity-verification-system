import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThirdwebProvider } from "thirdweb/react";
import App from './App.jsx'
import './index.css'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { persistor } from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThirdwebProvider clientId={import.meta.env.VITE_THIRDWEB_CLIENTID} activeChain="sepolia">
        <App />
      </ThirdwebProvider>
    </PersistGate>
  </Provider>

)
