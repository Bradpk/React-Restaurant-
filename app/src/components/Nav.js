const user = {
    imageUrl: 'https://flxt.tmsimg.com/assets/p15925023_i_h9_aa.jpg',
    imageWidth: 200,
    imageHeight: 175,
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
                    <div className='col-6'><a href="#">Brad's Bistro In The Bush</a> <Profile /></div>
                    <div className='col-2'><a href="#">Menu</a></div>
                    <div className='col-2'><a href="#">Events</a></div>
                    <div className='col-2'><a href="#">About</a></div>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar