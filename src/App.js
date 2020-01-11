import React, { useState } from 'react';
import Banner from './components/Banner';
import Search from './components/Search';
import ItemList from './components/ItemList';


const data = {
  "items": [
    {
      "name": "Canon 555",
      "type": "camera",
      "location": "Foster-Walker Complex",
      "img": "https://static.bhphoto.com/images/images500x500/1566949680_1502489.jpg",
      "user": "joo123",
      "availableTill": "June 11th 2020",
      "price": "3.99"
    },
    {
      "name": "Cool Bike 255",
      "type": "bike",
      "location": "Elder",
      "img": "https://images.giant-bicycles.com/b_white,c_pad,h_650,q_80/orcopm04xg7xrdmhpwo8/MY19TranceSXE+0Pro_ColorA.jpg",
      "user": "andrew22",
      "availableTill": "June 1st 2020",
      "price": "5.50"
    },
    {
      "name": "Used bike 333",
      "type": "bike",
      "location": "1500 Chicago Avenue",
      "img": "https://vader-prod.s3.amazonaws.com/1557768743-state-the-keansburg-bike-1557768701.jpg",
      "user": "bambam",
      "availableTill": "June 13th 2020",
      "price": "20.99"
    },
    {
      "name": "sick camera 555",
      "type": "camera",
      "location": "Foster-Walker Complex",
      "img": "https://icdn6.digitaltrends.com/image/digitaltrends/fujifilm-x-t30-hands-on-7174-2-720x720.jpg",
      "user": "batubatu",
      "availableTill": "May 10th 2020",
      "price": "3.99"
    }
  ]
};

const App = () =>  {
  const [searchTerm, setSearchTerm] = useState("");

  return(
    <div>
      <Banner />
      <Search state={{searchTerm, setSearchTerm}} />
      <ItemList items={data.items}/>
  </div>
  );
  
};

export default App;