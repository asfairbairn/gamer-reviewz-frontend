import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    function navigate(e) {
        e.preventDefault()
        window.history.pushState(null, "", e.target.href)
    }
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/genres">Genres</NavLink>
            <NavLink to="/gameform">Submit Review</NavLink>
        </nav>
    )
}

export default NavBar