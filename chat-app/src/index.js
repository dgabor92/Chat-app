import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB3SQ72BLnOyFydVvh9qDlgQyTOH2ANqlY",
  authDomain: "superchat-app-4f00f.firebaseapp.com",
  databaseURL: "https://superchat-app-4f00f.firebaseio.com",
  projectId: "superchat-app-4f00f",
  storageBucket: "superchat-app-4f00f.appspot.com",
  messagingSenderId: "830592829639",
  appId: "1:830592829639:web:72e6cbf08167e7ef4656e2",
  measurementId: "G-ZRSSEDY5LR",
});

ReactDOM.render(
  <React.StrictMode>
    <div>Hello world!</div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
