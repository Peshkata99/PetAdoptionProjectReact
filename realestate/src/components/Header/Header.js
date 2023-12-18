import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import styles from './Header.module.css';

export const Header = () => {
    const { isAuthenticated, userEmail} = useContext(AuthContext)
    return (
        <nav className={styles.navDiv}>
            <Link className={styles.navHome} to="/">FuzzyFriends</Link>

            <Link className={styles.navElement} to="/catalog">Catalog</Link>
            {isAuthenticated && (
                <div >
                    <Link className={styles.navElement} to="/my-catalog">My Pets</Link>
                    <Link className={styles.navElement} to="/create-pet">Create Pet</Link>                 
                    <span className={styles.navElement}>Hello, {userEmail}</span>
                    <Link className={styles.navElement} to="/logout">Logout</Link>
                    
                </div>)
            }
            
            {!isAuthenticated && (
                <div>
                    <Link className={styles.navElement} to="/login">Login</Link>
                    <Link className={styles.navElement} to="/register">Register</Link>
                </div>
            )}
            
        </nav>
    );
}