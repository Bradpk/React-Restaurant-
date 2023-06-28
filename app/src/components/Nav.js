function Navbar() {
    return (
        <div className='nav'>
            <nav className='container'>
                <ol className='row'>
                    <div className='col-6'><a href="#">Restaurant Name</a></div>
                    <div className='col-2'><a href="#">Menu</a></div>
                    <div className='col-2'><a href="#">Hours</a></div>
                    <div className='col-2'><a href="#">About</a></div>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar