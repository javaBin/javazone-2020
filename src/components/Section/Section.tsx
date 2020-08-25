import React from 'react';
import styles from './Section.module.scss';
import classNames from "classnames";

export type SectionLayout = 'left' | 'center' | 'right';
export type ColorChoices = 'pink' | 'blue' | 'green';

const colorCls = {
    'pink': styles.colorPink,
    'blue': styles.colorBlue,
    'green': styles.colorGreen,
}

function getColorCls(color?: ColorChoices) {
    if (color){
        return colorCls[color]
    }
}

export interface SectionProps {
    layout?: SectionLayout;
    header?: React.ReactNode;
    children?: React.ReactNode;
    color?: ColorChoices
}

export function Section(props: SectionProps) {
    const cls = classNames(styles.header, getColorCls(props.color))
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={cls}>
                    {props.header}
                </div>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}