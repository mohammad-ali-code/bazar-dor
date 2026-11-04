import React from 'react';
import NavHead from './NavHead';
import NavLinks from './NavLinks';
import NavMarquee from './NavMarquee';

const Navbar = () => {
    return (
        <nav>
            <NavHead></NavHead>
            <NavLinks></NavLinks>
            <NavMarquee></NavMarquee>
        </nav>
    );
};

export default Navbar;