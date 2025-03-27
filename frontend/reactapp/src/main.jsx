import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './component/Home'
import Form from './component/Form'
import App from './component/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/*<Home/>
     <Home/>
     <Form/>*/}
     <App/>
  </StrictMode>,
)
