import React from 'react';

export interface VideoSourceProps {
    canPlayWebm: boolean;
}

export default function VideoSource(props: VideoSourceProps) {
    return props.canPlayWebm
        ? <source src="https://storage.googleapis.com/javazone-assets/videos/timelapse.webm" type="video/webm" />
        : <source src="https://storage.googleapis.com/javazone-assets/videos/timelapse.mp4" type="video/mp4" />
}