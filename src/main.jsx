import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContextProvider from './Pages/ContextProvider/ContextProvider.jsx'
AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
