import React from 'react';
import styles from './KidsSection.module.scss';

interface KidsSectionProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export function KidsSection(props: KidsSectionProps) {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                {props.header}
                {props.children}
            </div>
        </div>
    )
}