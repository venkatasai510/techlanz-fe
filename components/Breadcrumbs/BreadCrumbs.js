// Breadcrumbs.js

import React from 'react';
import styles from "styles/Components/Breadcrumbs/breadcrumbs.module.scss";
import SVGImages from "assets/images/index";
import Link from "next/link";

const Breadcrumbs = ({ items }) => {
    return (
        <ul className={styles.breadcrumbs}>
            {items.map((item, index) => (
                <li key={index}>
                    {index === 0 && (
                        <Link href="/">
                            <img src={SVGImages.home.src} alt={item.text} />
                        </Link>
                    )}
                    {index !== 0 && item.url && (
                        <Link href={item.url}>
                            {item.text}
                        </Link>
                    )}
                    {index !== items.length - 1 && index !== 0 && <span>&gt;</span>}
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumbs;
