import React from 'react'
import  { ChakraProvider} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import themes from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider theme={themes}>

      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
