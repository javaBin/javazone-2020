import React from 'react';
import styles from './PageBanner.module.scss';

export interface PageBannerProps {
    header: string;
    subHeader: string;
    imageName: string;
}

export function PageBanner(props: PageBannerProps) {
    const imagePath = `https://d3o108dy577i1m.cloudfront.net/2019/images/${props.imageName}.jpg`;
    return (
        <section className={styles.pageBanner}>
            <img src={imagePath} alt="Page banner"/>
            <div className={styles.pageBannerHeader}>
                <h1>{props.header}</h1>
                <h2>{props.subHeader}</h2>
            </div>
        </section>
    )
}
