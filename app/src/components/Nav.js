const user = {
    imageUrl: 'https://flxt.tmsimg.com/assets/p15925023_i_h9_aa.jpg',
    imageWidth: 200,
    imageHeight: 150,
  };
  
  function Profile() {
    return (
      <>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageWidth,
            height: user.imageHeight
          }}
        />
      </>
    );
  }

function Navbar() {
    return (
        <div className='navigation'>
            <nav className='container-fluid'>
                <ol className='row'>
                <div className='col-2'><Profile /></div>
                    <div className='col-4 texttitle'><a href="#" className="Bistro">Bistro In The Bush</a></div>
                    <div className='col-2 text'><a href="#" className="Bistro2">Menu</a></div>
                    <div className='col-2 text'><a href="#" className="Bistro2">Events</a></div>
                    <div className='col-2 text'><a href="#" className="Bistro2">About</a></div>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar