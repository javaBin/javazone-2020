import React from 'react';
import styles from './CenterSection.module.scss';

interface CenterSectionProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export function CenterSection(props: CenterSectionProps) {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.container}>
                    {props.header}
                    {props.children}
                </div>
            </div>
        </>
    )
}