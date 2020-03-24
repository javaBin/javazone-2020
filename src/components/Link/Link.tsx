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
            ?   <a href={props.url} className={styles.link} target={props.noBlankTarget ? '' : '_blank'}>
                    <span >{props.children}</span>
                </a>
            : 
                <RouterLink to={props.url} className={styles.link}>
                   <span >
                    {props.children}
                    </span>
                </RouterLink>
            
    )
}

export default Link;