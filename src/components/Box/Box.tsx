import React from 'react';
import styles from './Box.module.scss';

interface BoxProps {
    children: React.ReactNode;
}

function Box(props: BoxProps) {
    return (
        <div className={styles.box}>
            {props.children}
        </div>
    )
}

export default Box;