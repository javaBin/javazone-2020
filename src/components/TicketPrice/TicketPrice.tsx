import React from 'react';
import classnames from 'classnames';
import styles from './TicketPrice.module.scss';

interface TicketPriceProps {
    soldOut?: boolean;
    children: React.ReactNode;
}

export function TicketPrice(props: TicketPriceProps) {
    const classes = classnames(
        styles.price,
        {[styles.soldOut]: props.soldOut}
    )
    return (
        <span className={classes}>NOK {props.children},-</span>
    )
}

TicketPrice.defaultProps = {
    soldOut: false
}