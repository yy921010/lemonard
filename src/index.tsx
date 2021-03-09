import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/components';
import { UseRequestProvider } from 'ahooks';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import 'remixicon/fonts/remixicon.css';
import './index.css';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    cache: new InMemoryCache(),
    connectToDevTools: (process.env.REACT_APP_IS_CONNECT_DEV_TOOL as unknown) as boolean,
});

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyles />
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
