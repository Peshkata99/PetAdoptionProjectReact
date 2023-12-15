import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
    const { isAuthenticated, userEmail} = useContext(AuthContext)
    return (
        <nav className="navDiv">
            <Link to="/">FuzzyFriends</Link>

            {isAuthenticated && (
                <div >
                    <Link to="/create-pet">Create Pet</Link>
                    <Link to="/logout">Logout</Link>
                    <span>Hello, {userEmail}</span>
                </div>)
            }
            {!isAuthenticated && (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            )}
            <Link to="/catalog">Catalog</Link>
        </nav>
    );
}