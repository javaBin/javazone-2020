import React, { lazy, Suspense, useEffect } from 'react';
import styles from './Jumbotron.module.scss';
import { useCanPlayVideoType } from '../../core/hooks/UseCanPlayVideoType';

const VideoSource = lazy(() => import('./VideoSource'));

interface JumbotronProps {
    title?: string;
    subTitle?: string;
    location?: string;
}

export function Jumbotron(props: JumbotronProps) {

    const canPlayWebm = useCanPlayVideoType('webm');
    useEffect(() => {
        const vid = document.getElementById('backgroundLapse') as HTMLVideoElement;
        vid.play();
    });

    return (
        <div className={styles.jumbotron}>
            <Suspense fallback={<img src="splash.jpg" alt="loading"/>}>
                <video preload="auto" playsInline autoPlay muted loop style={{background: "transparent no-repeat url('splash.jpg')", backgroundSize: "100%"}} className={styles.poster} id="backgroundLapse">
                    <VideoSource canPlayWebm={canPlayWebm} />
                    Your browser does not support HTML5 video.
                </video>
            </Suspense>
            <div className={styles.jumbotronContent}>
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
                <h2 className={styles.locationText}>{props.location}</h2>
            </div>
        </div>
    )
}