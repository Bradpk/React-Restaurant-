import React, { useEffect, useState } from "react";
import axios from 'axios';

function MainContent() {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        axios.get('/menudata.json') // http://127.0.0.1:8000/getmenu/
            .then(response => {
                setMenuItems(response.data);
            })
    }, []);

    const handleClick = (category) => {
        setSelectedCategory(category);
    };

    let filteredItems;
    if (selectedCategory != '') {
        filteredItems = menuItems.filter(item => item.category === selectedCategory);
    } else {
        filteredItems = menuItems;
    }

    return (
        <div className='mainback'>
            <h1>Bush Tucker</h1>
            <button onClick={() => handleClick('Breakfast')}>Breakfast</button>
            <button onClick={() => handleClick('Lunch')}>Lunch</button>
            <button onClick={() => handleClick('Dinner')}>Dinner</button>

            {filteredItems.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <h6>{item.cuisine_type}</h6>
                    <h6>{item.category}</h6>
                    <h6>{item.description}</h6>
                    <h6>${item.price}</h6>
                    <br />
                </div>
            ))}
        </div>
    );
}


export default MainContent;