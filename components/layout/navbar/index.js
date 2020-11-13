import React from 'react'
import styles from './index.module.css'

export default () => {
    return (
        <div className={styles.Navbar}>
            <ul className={styles.NavItems}>
                <li className={styles.NavItem} id='gym'><a>Gym</a></li>
                <li className={styles.NavItem} id='home-workout'><a>Home Workout</a></li>
            </ul>
        </div>
    )
}
