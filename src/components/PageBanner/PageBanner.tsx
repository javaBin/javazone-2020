import React, {useEffect, useState} from 'react';
import styles from './PageBanner.module.scss';
import classNames from "classnames";

export interface PageBannerProps {
    header: string;
    subHeader: string;
}

const bannerSrc = "jz20-1500x500-bg-clean.png";
const eyes1 = "jz20-1500x500-eyes1.png";
const eyes2 = "jz20-1500x500-eyes2.png";

export function VikingBanner(props: PageBannerProps) {
    const [blink1, setBlink1] = useState(false)
    const [blink2, setBlink2] = useState(false)

    useEffect(() => {
        var timeout: NodeJS.Timeout;
        const interval = setInterval(() => {
            setBlink1(true);
            timeout = setTimeout(() => setBlink1(false), 250)
        }, 4000);
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
        var timeout: NodeJS.Timeout;
        const interval = setInterval(() => {
            setBlink2(true);
            timeout = setTimeout(() => setBlink2(false), 250)
        }, 6500);
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, []);

    const cls1 = classNames(styles.pageBannerImg, {[styles.blink] : blink1})
    const cls2 = classNames(styles.pageBannerImg, {[styles.blink] : blink2})

    return (
        <section className={styles.pageBanner}>
            <img className={styles.pageBannerImg} src={`/2020/images/${bannerSrc}`} alt="Page banner"/>
            <img className={cls1} src={`/2020/images/${eyes1}`} alt="Page banner"/>
            <img className={cls2} src={`/2020/images/${eyes2}`} alt="Page banner"/>
            <div className={styles.pageBannerHeader}>
                <h1>{props.header}</h1>
                <h2>{props.subHeader}</h2>
            </div>
        </section>
    )
}