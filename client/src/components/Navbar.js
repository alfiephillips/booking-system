import './Navbar.css';

function Navbar(){
    return (
    <div>
        <nav>
            <ul>
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/schools">Schools</a></li>
            </ul>
        </nav>
    </div>
    )
}



export default Navbar;