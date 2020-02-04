import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { AcademyLocationSection } from '../../components/AcademyLocation/AcademyLocationSection';
import { Section } from '../../components/Section/Section';
import { academies } from '../../core/data';
import {AcademyProgram} from "../../components/AcademyProgram/AcademyProgram";

export function AcademyPage() {
    return (
        <>
            <PageBanner header="JavaZone Academy" subHeader="A free taste of JavaZone for IT-students!" imageName="academy" />
            <Seperator />
            <CenterSection header={<h1>Come join us in february</h1>}>
                <p>
                    Are you a student? Interested in IT? Come join us for JavaZone Academy. 
                    <br />
                    JavaZone Academy is a free event for students in Norway, where we invite 
                    <br />
                    you to take part in the JavaZone experience.
                </p>
                <p>
                    We will bring great talks, free food, mingling, and great partners to <strong>Tromsø</strong>, <strong>Trondheim</strong>, and <strong>Oslo</strong>.
                    <br />
                    Join us for a great evening!
                </p>
                <p>
                    See below for a detailed program for each event. And watch this space for updates!
                </p>
            </CenterSection>
            <Section header={<h1>How do I register?</h1>}>
                <p>
                   Click the "Registration" link below for your preferred city, and fill in your details in the registration form. You'll get a confirmation email with your ticket which you must bring to the event. The events are usually quite popular, so make sure to register as soon as possible.
                </p> 
            </Section>
            <AcademyLocationSection academies={academies} />
            <CenterSection header={<h1>Program</h1>}>
                    <AcademyProgram program={academies.map(academy => academy.program)} partners={academies.map(city => city.partners)} />
            </CenterSection>
        </>
    )
}
