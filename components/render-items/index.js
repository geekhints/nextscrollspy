import React from 'react'
import styles from './index.module.css'

import cn from 'classnames'

export const RenderItems = ({ label, href, isActive }) => {

    return (
        <li
            key={label}
            className={cn(styles.NavItem, `#${isActive}` === href ? `${styles.Active}` : '')}
        >
            <a href={href} className={styles.NavLink}>{label}</a>
        </li>
    )
}

export default RenderItems
