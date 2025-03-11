import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
		<Link to="/">SHOP</Link>
		<nav className="navbar">
     		<Link to="/" className="nav-link">Home</Link>
    		<Link to="/contact" className="nav-link">Contact</Link>
    	</nav>
		<img src="#" className="cart-icon" alt="Cart Icon" />
		</header>
	)
}