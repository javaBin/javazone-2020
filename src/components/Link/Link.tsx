import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.scss';
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

interface LinkProps {
    url: string;
    children: React.ReactNode;
    external?: boolean;
    noBlankTarget?: boolean;
    color?: ColorChoices;
    blankInternal?: boolean
}

function Link(props: LinkProps) {
    const cls = classNames(styles.link, getColorCls(props.color))
    return (
        props.external 
            ?   <a href={props.url} className={cls} target={props.noBlankTarget ? '' : '_blank'}>
                    <span >{props.children}</span>
                </a>
            : 
                <RouterLink to={props.url} className={cls} target={props.blankInternal ? '_blank' : ''} >
                   <span >
                    {props.children}
                    </span>
                </RouterLink>
            
    )
}

export default Link;