import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return <>
                <header>
                    <h1>Khari - App</h1>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/search">Search</NavLink>
                    </nav>
                </header>

                <main>
                <Outlet />
                </main>
                
                <footer>Khari @2022</footer>
            </>
}

export default Layout;