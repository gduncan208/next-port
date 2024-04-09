
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { useMediaQuery } from 'react-responsive';
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import styles from "../page.module.css";

const navLinks = [
    {
        title: "About",
        id: "about",
    },
    {
        title: "Projects",
        id: "projects",
    }
]



const NavBar = () => {
    const [navbarOpen, setNavbarOpen]= useState(false);
    const isMobile = useMediaQuery({ maxWidth: 550 });

    useEffect (() => {
        if (!isMobile && navbarOpen) {
            setNavbarOpen(false);
        }
    }, [isMobile, setNavbarOpen])

    return (
        
        <nav className={`${styles.nav}
         ${isMobile ? styles.mobileNav : {height: '100%'}}`}>

            <a href={'/'} className={styles.logo}>LOGO</a>
            <div>
            {isMobile && (
                <div style=
                {{zIndex: 2000, position: "relative"}}>
                 <Hamburger 
                    toggled={navbarOpen} 
                    toggle={setNavbarOpen} 
                    size={30}
                    onToggle={setNavbarOpen}
                     />
                </div>
                        )}           
                {navbarOpen &&(
                    <MenuOverlay links={navLinks} /> 
                )}
                 
                {!isMobile && (
                    <div>
                    <ul>
                       {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink title={link.title} id={link.id}/>
                            </li>
                       ))}
                    </ul>
                </div>
                )}   
            </div>
        </nav>
    );
};

export default NavBar;