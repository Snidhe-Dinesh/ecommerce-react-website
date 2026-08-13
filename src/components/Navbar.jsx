import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav>
               <Link  to="/"> <div className="logo">ShopHub</div></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/checkout">Cart</Link></li>
                </ul>
                <div className="right-nav">
                    <Link className="login"  to="/auth">Login</Link>
                   <Link className="logout" to="/auth">Sign up</Link>

                </div>

            </nav>


        </div>
    )

}