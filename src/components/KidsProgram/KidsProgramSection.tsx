import React from 'react';
import styles from './KidsProgramSection.module.scss';
import Link from "../Link/Link";

interface KidsProgramSectionProps {
    header: string;
    speakers: string;
    children?: React.ReactNode;
    imageName: string;
    imageType?: string;
    moreInfoLink?: string;
    registrationLink: string;
}

export function KidsProgramSection(props: KidsProgramSectionProps) {
    const imageType = !!props.imageType? props.imageType : 'jpg';
    const imagePath = `https://d3o108dy577i1m.cloudfront.net/2019/images/${props.imageName}.${imageType}`;
    return (
        <div className={styles.section}>
            <h2>{props.header}</h2>
            <p className={styles.speakers}>{props.speakers}</p>
            <div className={styles.container}>
                <div className={styles.imageBlock}>
                    <img className={styles.img} src={imagePath}/>
                </div>
                <div className={styles.content}>
                    {props.children}
                    <div className={styles.buttons}>
                        {props.moreInfoLink ? <Link external url={props.moreInfoLink}>Mer Info</Link> : null}
                        <Link external url={props.registrationLink}>Påmelding</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
