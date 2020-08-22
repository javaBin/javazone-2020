import React from 'react';
import styles from './PageBanner.module.scss';

export interface PageBannerProps {
    header: string;
    subHeader: string;
    imageName: string;
    imagePath?: string;
}

const bannerSrc = "jz20-banner-background.png";

export function PageBanner(props: PageBannerProps) {
    const path = !props.imagePath ? '2019/images/' : props.imagePath;
    const imagePath = props.imageName === bannerSrc ? `/2020/images/${bannerSrc}` :`https://d3o108dy577i1m.cloudfront.net/${path}${props.imageName}.jpg`;
    return (
        <section className={styles.pageBanner}>
            <img className={styles.pageBannerImg} src={imagePath} alt="Page banner"/>
            <div className={styles.pageBannerHeader}>
                <div style={{display: 'flex'}}>
                    <div>
                        <h1>{props.header}</h1>
                        <h2>{props.subHeader}</h2>
                    </div>
                    <img className={styles.figur} src="/2020/images/JavaZone2020-Figur-Ragnar.png" alt="viking figur"/>
                </div>
            </div>
        </section>
    )
}

type VikingBannnerProps = Omit<Omit<PageBannerProps, "imageName">, "imagePath">;

export function VikingBanner(props: VikingBannnerProps) {
    return (
        <PageBanner {...props} imageName={bannerSrc} imagePath="/2020/images"/>
    )
}