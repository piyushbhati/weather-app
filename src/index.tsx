import {React, WeatherStore, toJS} from '@api'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const weatherStore: WeatherStore = new WeatherStore()

declare global {
  interface Window {
    stores: any
    toJS: any
  }
}

window.stores = weatherStore
window.toJS = toJS

ReactDOM.render(
  <React.StrictMode>
    <App store={weatherStore}/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
