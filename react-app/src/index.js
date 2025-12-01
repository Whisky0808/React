import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from "@apollo/client";
import {client} from "../src/components/ApolloClient&GraphQl/apollo/client.js"
import {Provider} from "react-redux"
import {store} from './state/store.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RouterRoot from './myRouter/RouterRoot.jsx';
import Profile from './myRouter/Profile.jsx';
import ProfilePage from './myRouter/ProfilePage.jsx';
import ItemsList from './SmartVendingMachine/ItemsList.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<RouterRoot></RouterRoot>
  },
  {
    path:'/profile',
    element:<Profile/>

  },
  {
    path:'/itemsList',
    element:<ItemsList/>

  },
  {
    // :id --> dynamic segment
    path:'/profile/:profileId',
    element:<ProfilePage/>

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // mounting/ updating App component for twice
  // <Provider store={store}>
  //   <RouterProvider router={router}/>
  //   <App />
  // </Provider>

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
    

);

reportWebVitals();
