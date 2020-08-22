import React, {ReactNode, useState} from 'react';
import {Collapse} from 'react-collapse';
import styles from './VRProgram.module.scss';
import {ActiveButton, ButtonGroup} from '../Button/ButtonGroup';
import {Program, Schedule, Speakers, Talk} from '../../core/models/Program.model';
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

function Bio(props: {speakers?: Speakers}) {
    return (
        <>
            {props.speakers?.map(speaker =>
                <div className={styles.bio}>
                    <span className={styles.bioTittle}>{`${speaker.name}: `}</span>
                    <span>{speaker.bio}</span>
                </div>
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
        <span>{talk.title}</span>
        <span className={styles.speaker}>{talk.speakers && talk.speakers.map(speaker => speaker.name).join(", ")}</span>
        <Collapse isOpened={open}>
            <Abstract abstract={talk.abstract}/>
            <Bio speakers={props.talk.speakers}/>
        </Collapse>
    </ClickableDiv>
}

function Slot(props: {talks: Talk[]}){
    return <div className={styles.description}>
        {
            props.talks.map((talk, index) => {
                return <SlotInformation key={index} talk={talk}/>
            })
        }
    </div>
}

function ProgramSlot(props: Schedule) {
    const {time, talks} = props;
    return (
        <div className={styles.program}>
            <div className={styles.time}>
                <h2>{time}</h2>
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