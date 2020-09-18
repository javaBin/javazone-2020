import React, {ReactNode, useState} from 'react';
import {UnmountClosed} from 'react-collapse';
import styles from './VRProgram.module.scss';
import {ActiveButton, ButtonGroup} from '../Button/ButtonGroup';
import {Program, Schedule, Speakers, Speaker, Talk} from '../../core/models/Program.model';
import {program} from '../../core/data/Program.data';
import classNames from "classnames";


function ClickableDiv(props: {clickAble: boolean, className?: string, onClick?: () => void, children?: ReactNode}){
    const {clickAble, className, onClick, children} = props;

    const cls = classNames(className, {[styles.clickable]: clickAble});

    if (clickAble){
        return <div className={cls} onClick={onClick} role="button">
            {children}
        </div>
    }

    return <div className={className}>{children}</div>


}

function Abstract(props: {abstract?: string}) {
    return (
        <>
            <div className={styles.abstractTitle}>Abstract:</div>
            <div className={styles.abstract}>{props.abstract}</div>
        </>
    )
}

function Bio(props: {speaker: Speaker}){
    const {name, bio} = props.speaker;
    if (!bio){
        return null;
    }

    return <div className={styles.bio}>
        <span className={styles.bioTittle}>{`${name}: `}</span>
        <span>{bio}</span>
    </div>
}

function Bios(props: {speakers?: Speakers}) {
    return (
        <>
            {props.speakers?.map(speaker =>
                <Bio speaker={speaker}/>
            )}
        </>
    )
}


function SlotInformation(props: {talk: Talk}){
    const {talk} = props;
    const [open, setOpen] = useState(false);
    const expandeble = !!talk.abstract;

    const cls = classNames(styles.talk, {[styles.clickable]: expandeble});

    return <ClickableDiv clickAble={expandeble} className={cls} onClick={() => setOpen(!open)}>
        <div className={styles.talkContainer}>
            <div className={styles.talkMainInfo}>
                <span>{talk.title}</span>
                <span className={styles.speaker}>{talk.speakers && talk.speakers.map(speaker => speaker.name).join(", ")}</span>
            </div>
            {!!talk.video && <span className={styles.video} role="img" aria-label="Film available">🎬</span>}
        </div>
        <UnmountClosed isOpened={open} >
            {!!talk.video && <div style={{"padding":"56.25% 0 0 0", "marginTop": "1rem", "position": "relative"}}>
            <iframe src={talk.video}
                    title={talk.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{"position":"absolute", "top": 0, "left":0, "width":"100%", "height":"100%"}}/>
            </div>}
            <Abstract abstract={talk.abstract}/>
            <Bios speakers={props.talk.speakers}/>
        </UnmountClosed>
    </ClickableDiv>
}

function Slot(props: {talks: Talk[]}){
    return <div className={styles.description}>
        {
            props.talks.map((talk, index) => {
                return <SlotInformation key={talk.id} talk={talk}/>
            })
        }
    </div>
}

function ProgramSlot(props: Schedule) {
    const {time, talks} = props;
    return (
        <div className={styles.program}>
            <div className={styles.time}>
                <h2 style={{fontFamily: 'PT Sans'}}>{time}</h2>
            </div>
            <div className={styles.description}>
                <Slot talks={talks}/>
            </div>
        </div>
    )
}

function ProgramContainer(props: { program: Program }) {
    return <div className={styles.container}>
        {
            props.program.schedule.map((slot, index) => {
                return <ProgramSlot key={index} time={slot.time} talks={slot.talks}/>
            })
        }
    </div>
}

export function VRProgram() {

    const [selectedLocation, setSelectedLocation] = useState({name: program[0].location, key: 0} as ActiveButton)
    const [selectedProgram, setSelectedProgram] = useState(program[0]);

    function activeButton(button: ActiveButton) {
        setSelectedLocation(button);
        setSelectedProgram(program[button.key]);
    }

    return (
        <div>
            <ButtonGroup activeButton={(button: ActiveButton) => activeButton(button)}>
                <button>Teknologihuset - Oslo</button>
                <button>NAV - Oslo</button>
                <button>Virtual</button>
                <button>Kantega - Trondheim</button>
            </ButtonGroup>
            {!!selectedLocation.name ? <ProgramContainer program={selectedProgram}/> : null }
        </div>
    )
}