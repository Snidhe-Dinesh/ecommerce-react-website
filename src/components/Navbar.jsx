import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function Navbar() {
    // const{user,logout}=useContext(AuthContext);
        const { user,logout } = useAuth();
    
    return (
        <div>
            <nav>
               <Link  to="/"> <div className="logo">ShopHub</div></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/checkout">Cart</Link></li>
                </ul>
               {!user ? <div className="right-nav">
                    <Link className="login"  to="/auth?mode=login">Login</Link>
                   <Link className="logout" to="/auth?mode=signup">Sign up</Link>

                </div>: <div>
                    <span className="nav-label">Hello,{user.email}</span>
                   <button className="login" onClick={logout}>Logout</button>
                </div>
                }

            </nav>


        </div>
    )

}