import React from 'react';

const Item = ({item}) => {
    return (
        <div>
            <img src={item.img}></img>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.availableTill}</p>
        </div>
    );
}

export default Item;