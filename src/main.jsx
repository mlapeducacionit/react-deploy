import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as bootstrap from 'bootstrap' // los scripts de bootstrap
import { Provider } from 'react-redux'

import store from './store/index.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />,
    </Provider>
)
