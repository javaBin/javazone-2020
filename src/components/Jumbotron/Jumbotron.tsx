import React, { lazy, Suspense, useEffect } from 'react';
import styles from './Jumbotron.module.scss';
import { useCanPlayVideoType } from '../../core/hooks/UseCanPlayVideoType';

const VideoSource = lazy(() => import('./VideoSource'));

interface JumbotronProps {
    title?: string;
    subTitle?: string;
    subsubTitle?: string;
    location?: string;
}

/*
function FrontpageButton(){
    const cls = classNames(styles.button, linkStyles.link)
    return <RouterLink to="/live" className={cls}>
               <span>
                   The VR videos are now live 🎥
               </span>
    </RouterLink>
}
 */

export function Jumbotron(props: JumbotronProps) {

    const canPlayWebm = useCanPlayVideoType('webm');
    useEffect(() => {
        const vid = document.getElementById('backgroundLapse') as HTMLVideoElement;
        vid.play();
    });

    return (
        <div className={styles.jumbotron}>
            <Suspense fallback={<img src="splash.png" alt="loading"/>}>
                <video preload="auto" playsInline autoPlay muted loop className={styles.poster} id="backgroundLapse">
                    <VideoSource canPlayWebm={canPlayWebm} />
                    Your browser does not support HTML5 video.
                </video>
            </Suspense>
            <div className={styles.jumbotronContent}>
                <img className={styles.logo} src="logo-sharp.svg" alt="logo"/>
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
                <h2>{props.location}</h2>
                {/*<FrontpageButton/>*/}
            </div>
        </div>
    )
}