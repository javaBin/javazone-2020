import { useState, useEffect } from 'react';

interface VideoFormats {
    [key: string]: string;
}

export function useCanPlayVideoType(type: string) {

    const [canPlayVideoType, setCanPlayVideoType] = useState(false);
    const formats: VideoFormats = {
        ogg: 'video/ogg; codecs="theora"',
        h264: 'video/mp4; codecs="avc1.42E01E"',
        webm: 'video/webm; codecs="vp8, vorbis"',
        vp9: 'video/webm; codecs="vp9"',
        hls: 'application/x-mpegURL; codecs="avc1.42E01E"'
    }
    const video = document.createElement('video');

    useEffect(() => {
        const canPlayVideoType = video.canPlayType(formats[type] || type);
        setCanPlayVideoType(canPlayVideoType === 'probably');
    }, [formats, type, video]);

    return canPlayVideoType;
}