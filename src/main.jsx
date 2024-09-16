import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@/assets/styles/main.scss";
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
