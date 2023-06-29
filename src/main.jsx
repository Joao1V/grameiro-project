import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./scss/styles.scss"
import "./assets/icons/icomoon.css"
import "react-credit-cards-2/dist/lib/styles.scss"
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';
import {registerLocale} from "react-datepicker";
registerLocale('ptBR', ptBR)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
