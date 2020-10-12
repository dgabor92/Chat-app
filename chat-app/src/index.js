import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";

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

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
