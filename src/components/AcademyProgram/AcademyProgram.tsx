import React, { useState } from 'react';
import styles from './AcademyProgram.module.scss';
import { ButtonGroup, ActiveButton } from '../Button/ButtonGroup';
import { AcademyProgram as Program } from '../../core/models/AcademyProgram.model';
import { Partner } from '../../core/models';

interface AcademyProgramProps {
    partners: Partner[][];
    program: Program[];
}

function ProgramSlot(props: {title: string, time: string, speaker?: string}) {
    return (
        <div className={styles.program}>
            <div className={styles.time}>
                <h2>{props.time}</h2>
            </div>
            <div className={styles.description}>
                <span>{props.title}</span>
                <span className={styles.speaker}>{props.speaker}</span>
            </div>
        </div>
    )
}

function PartnerImage(props: {name: string, url: string}) {
    const partnerImage = `https://d3o108dy577i1m.cloudfront.net/2019/logos/${props.name.toLocaleLowerCase()}.svg`;
    return (
        <a href={props.url}>
            <img alt="" className={styles.partner} src={partnerImage} />
        </a>
    )
}

export function AcademyProgram(props: AcademyProgramProps) {
    const [selectedCity, setSelectedCity] = useState({name: props.program[0].city, key: 0} as ActiveButton)
    const [selectedProgram, setSelectedProgram] = useState(props.program[0]);
    const [selectedPartners, setSelectedPartners] = useState(props.partners[0]);
    function activeButton(button: ActiveButton) {
        setSelectedCity(button);
        setSelectedProgram(props.program[button.key]);
        setSelectedPartners(props.partners[button.key]);
    }
    return (
        <div>
            <ButtonGroup activeButton={(button: ActiveButton) => activeButton(button)}>
                <button>Tromø</button>
                <button>Trondheim</button>
                <button>Oslo</button>
            </ButtonGroup>
            {!!selectedCity.name
                ? <div className={styles.container}>
                    <div className={styles.partnerAir}>
                        {selectedPartners.map(partner => {
                            return <PartnerImage key={partner.name} name={partner.name} url={partner.homepageUrl} />
                        })}
                    </div>
                    {selectedProgram.schedule.map((slot, index) => {
                        return <ProgramSlot key={index} title={slot.title} time={slot.time} speaker={slot.speakers} />
                    })}
                </div>
                : null
            }
        </div>
    )
}
