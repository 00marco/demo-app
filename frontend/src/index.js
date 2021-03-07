import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/search',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
    {
      search(search_pattern: "User") {
        ... on User {
          firstName
          lastName
          properties {
            street
            city
            state
            zip
            rent
          }
        }
    
        ... on Property {
          street
          city
          state
          zip
          rent
        }
      }
    }
    `
  })
  .then(result => console.log(result));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
