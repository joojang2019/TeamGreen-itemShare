import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import MainPage from "./MainPage";
import ItemPage from "./components/ItemPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//firebase
import firebase from "firebase/app";
import "firebase/database";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC6Ik083ha_1IPkKklf1qdl1jdvvF4oDrs",
  authDomain: "item-1b883.firebaseapp.com",
  databaseURL: "https://item-1b883.firebaseio.com",
  projectId: "item-1b883",
  storageBucket: "item-1b883.appspot.com",
  messagingSenderId: "512831900868",
  appId: "1:512831900868:web:c3e2d30285e6584d0fcd91",
  measurementId: "G-NHVDY8ZB8W"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

const App = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
        setAllItems(snap.val().items);
        setItems(snap.val().items);
      }
    };
    db.on("value", handleData, error => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);

  return (
    <Router>
      <div>
        <Banner />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <MainPage items={allItems} setItems={setItems} />}
          />
          <Route
            path="/results"
            exact
            render={() => (
              <MainPage items={items} setItems={setItems} allItems={allItems} />
            )}
          />
          <Route path="/:id" render={() => <ItemPage items={items} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
