import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store/index.js";
import ErrorBoundary from "./security/errorBoundary";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDEuDHqPemJNr4UZ2GE7PPXiIKUUU-pioI",
  authDomain: "react-chat-51455.firebaseapp.com",
  databaseURL:
    "https://react-chat-51455-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-chat-51455",
  storageBucket: "react-chat-51455.appspot.com",
  messagingSenderId: "638873356247",
  appId: "1:638873356247:web:5bc34b041e08a234e4ad92",
  measurementId: "G-S4W31Q6998",
});

export const Context = createContext(null);
const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = getFirestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <Context.Provider
          value={{
            auth,
            firebase,
            firestore,
          }}
        >
          <App />
        </Context.Provider>
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>
);
