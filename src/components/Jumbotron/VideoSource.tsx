import React from 'react';

export interface VideoSourceProps {
    canPlayWebm: boolean;
}

export default function VideoSource(props: VideoSourceProps) {
    return props.canPlayWebm
        ? <source src="https://d3o108dy577i1m.cloudfront.net/2019/videos/timelapse.webm" type="video/webm" />
        : <source src="https://d3o108dy577i1m.cloudfront.net/2019/videos/timelapse.mp4" type="video/mp4" />
}
