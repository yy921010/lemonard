import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/components';
import { UseRequestProvider } from 'ahooks';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import 'remixicon/fonts/remixicon.css';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyles />
        <UseRequestProvider
            value={{
                refreshOnWindowFocus: false,
                onError(error: Error) {
                    console.log(error);
                },
            }}
        >
            <App />
        </UseRequestProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
