export interface Speaker {
    name: string;
    bio?: string;
}

export type Speakers = Speaker[]

export interface Talk {
    title: string;
    id: string;
    speakers?: Speakers;
    abstract?: string;
}

export interface Schedule {
    time: string,
    talks: Talk[]
}

export interface Program {
    location: string;
    schedule: Schedule[];
    slido: string,
    liveEmbeddedUrl: string,
}
