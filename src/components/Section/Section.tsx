import React from 'react';
import styles from './Section.module.scss';

export type SectionLayout = 'left' | 'center' | 'right';

export interface SectionProps {
    layout?: SectionLayout;
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export function Section(props: SectionProps) {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    {props.header}
                </div>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}