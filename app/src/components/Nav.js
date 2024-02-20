import {useState} from 'react'

const user = {
    imageUrl: 'https://flxt.tmsimg.com/assets/p15925023_i_h9_aa.jpg',
    imageWidth: 200,
    imageHeight: 150,
  };

function Navbar() {
    return (
        <div className='navigation'>
            <nav className='container-fluid'>
                <ol className='row'>
                <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageWidth,
            height: user.imageHeight
          }}
        />
                    <div className='col-12 col-lg-6 texttitle'><a href="#" className="Bistro">Bistro In The Bush</a></div>
                    <div className='col-4 col-lg-1 text'><a href="#" className="Bistro2">Menu</a></div>
                    <div className='col-4 col-lg-1 text'><a href="#" className="Bistro2">Events</a></div>
                    <div className='col-4 col-lg-1 text'><a href="#" className="Bistro2">About</a></div>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar

