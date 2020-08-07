import React, {useState} from 'react';
import styles from './VRProgram.module.scss';
import {ButtonGroup, ActiveButton} from '../Button/ButtonGroup';
import {Program, Schedule, Talk} from '../../core/models/Program.model';
import {program} from '../../core/data/Program.data';

function Slot(props: {talks: Talk[]}){
    return <div className={styles.description}>
        {
            props.talks.map((talk, index) => {
                return <div className={styles.talk} key={index}>
                    <span>{talk.title}</span>
                    <span className={styles.speaker}>{talk.speakers}</span>
                </div>
            })
        }
    </div>
}

function ProgramSlot(props: Schedule) {
    const {time, talks} = props
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
                <button>Teknologihus - Oslo</button>
                <button>NAV - Oslo</button>
                <button>Virtual</button>
                <button>Kantega - Trondheim</button>
            </ButtonGroup>
            {!!selectedLocation.name ? <ProgramContainer program={selectedProgram}/> : null }
        </div>
    )
}
