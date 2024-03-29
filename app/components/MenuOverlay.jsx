import React from 'react';
import NavLink from './NavLink';
import styles from '../page.module.css';

const MenuOverlay = ( { links, index } ) => {
    return (
    <div className={styles.overlayMenu}>
        <ul style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem"
        }}>
        {links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.id} title={link.title} />
            </li>
            ))}
        </ul>
    </div>
    )   
}

export default MenuOverlay;