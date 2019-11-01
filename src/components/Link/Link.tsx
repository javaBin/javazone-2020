import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.scss';

interface LinkProps {
    url: string;
    children: React.ReactNode;
    external?: boolean;
    noBlankTarget?: boolean;
}

function Link(props: LinkProps) {
    return (
        props.external 
            ? <div className={styles.link}>
                <a href={props.url} target={props.noBlankTarget ? '' : '_blank'}>{props.children}</a>
            </div>
            : <div className={styles.link}>
                <RouterLink to={props.url}>
                    {props.children}
                </RouterLink>
            </div>
    )
}

export default Link;