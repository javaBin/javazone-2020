import React from 'react';
import styles from './ImageSection.module.scss';
import classnames from 'classnames';

interface ImageSectionProps {
    imageName: string;
    path?: string
    bottom?: boolean;
    top?: boolean;
    right?: boolean;
    left?: boolean;
}

export function ImageSection(props: ImageSectionProps) {
    const newPath = !props.path ? '2019/images/' : props.path;
    const imagePath = `https://d3o108dy577i1m.cloudfront.net/${newPath}${props.imageName}.jpg`;
    const classes = classnames(
        {[styles.center]: !props.bottom && !props.top && !props.left && !props.right},
        {[styles.bottom]: props.bottom},
        {[styles.top]: props.top},
        {[styles.right]: props.right},
        {[styles.left]: props.left}
    )
    return (
        <div className={styles.section}>
            <img className={classes} src={imagePath} alt=""/>
        </div>
    )
}

ImageSection.defaultProps = {
    bottom: false,
    top: false
}
