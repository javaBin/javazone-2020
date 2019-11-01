import React from 'react';
import styles from './ImageSection.module.scss';
import classnames from 'classnames';

interface ImageSectionProps {
    imageName: string;
    bottom?: boolean;
    top?: boolean;
    right?: boolean;
    left?: boolean;
}

export function ImageSection(props: ImageSectionProps) {
    const imagePath = `https://storage.googleapis.com/javazone-assets/images/${props.imageName}.jpg`;
    const classes = classnames(
        {[styles.center]: !props.bottom && !props.top && !props.left && !props.right},
        {[styles.bottom]: props.bottom},
        {[styles.top]: props.top},
        {[styles.right]: props.right},
        {[styles.left]: props.left}
    )
    return (
        <div className={styles.section}>
            <img className={classes} src={imagePath} />
        </div>
    )
}

ImageSection.defaultProps = {
    bottom: false,
    top: false
}