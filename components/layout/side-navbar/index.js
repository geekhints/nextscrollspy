import React from 'react'
import Scrollspy from 'react-scrollspy'

import WorkoutType from '../../items'
import RenderItems from '../../render-items'
import { useState } from 'react'

import styles from './index.module.css'

export const SideNav = () => {
    const [isActive, setisActive] = useState('')
    return (
        <Scrollspy offset={-50}
            items={['section-1', 'section-2', 'section-3']}
            className={styles.ScrollspyContainer}
            currentClassName="active"
            onUpdate={(element) => {
                if (element) {
                    setisActive(element.id)
                }
            }}
        >
            <div className={styles.ScrollspyNav}>
                {WorkoutType['gym'].map(item => {
                    return (
                        <RenderItems href={item.href} label={item.label} isActive={isActive} />
                    )
                })}
            </div>
        </Scrollspy>
    )
}

export default SideNav