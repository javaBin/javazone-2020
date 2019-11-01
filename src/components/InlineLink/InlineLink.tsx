import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InlineLink.module.scss';

interface InlineLinkProps {
    external?: boolean;
    noBlankTarget?: boolean;
    url: string;
    children: React.ReactNode;
}

export function InlineLink(props: InlineLinkProps) {
    return (
        props.external 
            ? <a className={styles.inlineLink} href={props.url} target={props.noBlankTarget ? '' : '_blank'}>{props.children}</a>
            : <Link className={styles.inlineLink} to={props.url}>
                {props.children}
            </Link>
    )
}

InlineLink.defaultProps = {
    external: false,
    noBlankTarget: false
}