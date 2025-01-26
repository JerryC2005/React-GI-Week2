import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="site-title">React</Link>
                <ul>
                    <li>
                    <Link to="/" className='active'>Counter</Link>
                    </li>

                    <li>
                        <Link to="/movie-search">Movie Search</Link>
                    </li>

                    <li>
                        <Link to="/notes-app">Notes App</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}