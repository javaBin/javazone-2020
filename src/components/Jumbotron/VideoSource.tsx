import React from 'react';

export interface VideoSourceProps {
    canPlayWebm: boolean;
    oldTimelapse?: true;
}

export default function VideoSource(props: VideoSourceProps) {
    if (!!props.oldTimelapse){
        return props.canPlayWebm
            ? <source src="https://d3o108dy577i1m.cloudfront.net/2019/videos/timelapse.webm" type="video/webm" />
            : <source src="https://d3o108dy577i1m.cloudfront.net/2019/videos/timelapse.mp4" type="video/mp4" />

    }
    return <source src="https://d3o108dy577i1m.cloudfront.net/2020/videos/timelapsev2.mp4" type="video/mp4" />
}
