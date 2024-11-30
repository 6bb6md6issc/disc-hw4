
function NavigationBar() {
    return (
        <nav className="nav-bar">
            <button className="nav-button">Home</button>
            <button className="nav-button">About</button>
            <button className="nav-button">Profile</button>
            <button className="nav-button" style={{ backgroundColor:'#7a0006'}}>Connection</button>
        </nav>
    );
}

export default NavigationBar