<<<<<<< HEAD
import React, { useState } from 'react';
import Banner from './components/Banner';
import Search from './components/Search';
import ItemList from './components/ItemList';

//firebase
import firebase from 'firebase/app';
import 'firebase/database';


// const data = {
//   "items": [
//     {
//       "name": "Canon 555",
//       "type": "camera",
//       "location": "Foster-Walker Complex",
//       "img": "https://static.bhphoto.com/images/images500x500/1566949680_1502489.jpg",
//       "user": "joo123",
//       "availableTill": "June 11th 2020",
//       "price": "3.99",
//       "email": "joo@young.com"
//     },
//     {
//       "name": "Cool Bike 255",
//       "type": "bike",
//       "location": "Elder",
//       "img": "https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/orcopm04xg7xrdmhpwo8/MY19TranceSXE+0Pro_ColorA.jpg",
//       "user": "andrew22",
//       "availableTill": "June 1st 2020",
//       "price": "5.50",
//       "email": "andrew@chung.com"
//     },
//     {
//       "name": "Used bike 333",
//       "type": "bike",
//       "location": "1500 Chicago Avenue",
//       "img": "https://vader-prod.s3.amazonaws.com/1557768743-state-the-keansburg-bike-1557768701.jpg",
//       "user": "bambam",
//       "availableTill": "June 13th 2020",
//       "price": "20.99",
//       "email": "bambam@gmail.com"
//     },
//     {
//       "name": "sick camera 555",
//       "type": "camera",
//       "location": "Foster-Walker Complex",
//       "img": "https://icdn6.digitaltrends.com/image/digitaltrends/fujifilm-x-t30-hands-on-7174-2-720x720.jpg",
//       "user": "batubatu",
//       "availableTill": "May 10th 2020",
//       "price": "3.99",
//       "email": "batu@batu.com"
//     }
//   ]
// };


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
=======
import React, { useState } from "react";
import Banner from "./components/Banner";
import Search from "./components/Search";
import ItemList from "./components/ItemList";
import ItemPage from "./components/ItemPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

// need to get it from firebase
const data = {
  items: [
    {
      id: 1,
      name: "Canon 555",
      type: "camera",
      location: "Foster-Walker Complex",
      img:
        "https://static.bhphoto.com/images/images500x500/1566949680_1502489.jpg",
      user: "joo123",
      availableTill: "June 11th 2020",
      price: "3.99"
    },
    {
      id: 2,
      name: "Cool Bike 255",
      type: "bike",
      location: "Elder",
      img:
        "https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/orcopm04xg7xrdmhpwo8/MY19TranceSXE+0Pro_ColorA.jpg",
      user: "andrew22",
      availableTill: "June 1st 2020",
      price: "5.50"
    },
    {
      id: 3,
      name: "Used bike 333",
      type: "bike",
      location: "1500 Chicago Avenue",
      img:
        "https://vader-prod.s3.amazonaws.com/1557768743-state-the-keansburg-bike-1557768701.jpg",
      user: "bambam",
      availableTill: "June 13th 2020",
      price: "20.99"
    },
    {
      id: 4,
      name: "sick camera 555",
      type: "camera",
      location: "Foster-Walker Complex",
      img:
        "https://icdn6.digitaltrends.com/image/digitaltrends/fujifilm-x-t30-hands-on-7174-2-720x720.jpg",
      user: "batubatu",
      availableTill: "May 10th 2020",
      price: "3.99"
    }
  ]
>>>>>>> 04b565d6209b3e0ffa73c47847ebb8b8b259cc90
};
   
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

const MainPage = () => {
  const [items, setItems] = useState(data.items);
  const searchQuery = new URLSearchParams(useLocation().search).get(
    "search_query"
  );

  if(searchQuery){
    const filteredItems = data.items.filter(item =>
      item.type.toLowerCase().startsWith(searchQuery.toLowerCase()) || 
      item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    if (JSON.stringify(items) !== JSON.stringify(filteredItems)) {
      setItems(filteredItems);
    }
  }
  
  return (
    <div>
<<<<<<< HEAD
      <Banner />
      <Search state={{searchTerm, setSearchTerm}} />
      {/* <ItemList items={data.items}/> */}
  </div>
=======
      <Search />
      <ItemList items={items} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Banner />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/results" component={MainPage} />
          <Route path="/:id" render={() => <ItemPage items={data.items} />} />
        </Switch>
      </div>
    </Router>
>>>>>>> 04b565d6209b3e0ffa73c47847ebb8b8b259cc90
  );
};

export default App;
export { data };
