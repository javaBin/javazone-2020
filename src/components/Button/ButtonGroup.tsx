import React, { useState, ReactElement } from 'react';
import styles from './Button.module.scss';

export interface ActiveButton {
    name: string;
    key: number;
}

interface ButtonGroupProps {
    children: React.ReactElement<any>[];
    activeButton: (button: ActiveButton) => void;
}

export function ButtonGroup(props: ButtonGroupProps) {
    const [activeButton, setActiveButton] = useState({name: props.children[0], key: 0});
    function handleClick(child: ReactElement<any>, key: number) {
        const activeButton = {name: child.props.children, key};
        setActiveButton(activeButton);
        props.activeButton(activeButton);
    }
    return (
        <div className={styles.buttonGroup}>
            {props.children.map((child, index) => {
                return React.cloneElement(child, {
                    key: index,
                    onClick: () => handleClick(child, index),
                    className: index === activeButton.key ? styles.active : '' 
                });
            })}
        </div>
    )
}