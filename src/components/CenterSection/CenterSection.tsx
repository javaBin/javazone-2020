import React from 'react';
import styles from './CenterSection.module.scss';
import classNames from "classnames";

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

interface CenterSectionProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
    color?: ColorChoices;
}

export function CenterSection(props: CenterSectionProps) {
    const cls = classNames(styles.container, getColorCls(props.color))
    return (
        <>
            <div className={styles.section}>
                <div className={cls}>
                    {props.header}
                    {props.children}
                </div>
            </div>
        </>
    )
}