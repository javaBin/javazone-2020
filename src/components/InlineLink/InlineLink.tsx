import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InlineLink.module.scss';
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

interface InlineLinkProps {
    external?: boolean;
    noBlankTarget?: boolean;
    url: string;
    children: React.ReactNode;
    color?: ColorChoices;
}

export function InlineLink(props: InlineLinkProps) {
    const cls = classNames(styles.inlineLink, getColorCls(props.color))
    return (
        props.external 
            ? <a className={cls} href={props.url} target={props.noBlankTarget ? '' : '_blank'}>{props.children}</a>
            : <Link className={cls} to={props.url}>
                {props.children}
            </Link>
    )
}

InlineLink.defaultProps = {
    external: false,
    noBlankTarget: false
}