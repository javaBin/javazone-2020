import React from 'react';
import styles from './PartnerPrices.module.scss';
import classnames from 'classnames';

interface PartnerPriceListProps {
    soldOut?: boolean;
    children: React.ReactNode; 
}

export function PartnerPriceList(props: PartnerPriceListProps) {
    const classes = classnames(
        styles.priceList,
        {[styles.soldOut]: props.soldOut},
    )
    return (
       <div className={classes}>
            {props.children}
       </div> 
    )
}

interface PartnerPriceProps {
    item: string;
    children: React.ReactNode;
}

export function PartnerPrice(props: PartnerPriceProps) {
    return (
        <div className={styles.price}>
            <p>
                {props.item}
            </p>
            <p id="price">
                NOK {props.children},-
            </p>
        </div>
    )
}