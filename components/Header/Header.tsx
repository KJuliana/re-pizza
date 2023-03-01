import React from 'react';
import styles from './Header.module.css';
import Search from "../Search/Search";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.root}>
            <Link href="/" className={styles.logo}>Едамаркет</Link>
            <Search/>
            <Link href="/favourites" className={styles.link}>Корзина</Link>
        </div>
    );
};

export default Header;