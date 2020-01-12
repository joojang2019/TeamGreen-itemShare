import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

const Item = ({item}) => {
    return (
        <Link to={`/${item.id}`} >
            <div>    
                <img src={item.img}></img>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.availableTill}</p>    
            </div>
        </Link>
    );
}


export default Item;
