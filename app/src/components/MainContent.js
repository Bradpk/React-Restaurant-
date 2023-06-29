import React, { useEffect, useState } from "react";
import axios from 'axios';

function MainContent() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(response => {
                setMenuItems(response.data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            {menuItems.length === 0 ? (
                <div>Loading...</div>
            ) : (
                menuItems.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <h6>{item.category}</h6>
                        <h6>{item.description}</h6>
                        <h6>{item.price}</h6>
                        <br />
                    </div>
                ))
            )}
        </div>
    );
}

export default MainContent;