import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { AcademyLocationSection } from '../../components/AcademyLocation/AcademyLocationSection';
import { Section } from '../../components/Section/Section';
import { academies } from '../../core/data';

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
                    We will bring great talks, free food, mingling, and great partners to <strong>Oslo</strong>, <strong>Throndheim</strong>, and <strong>Tromsø</strong>.
                    <br />
                    Join us for a great evening!
                </p>
                <p>
                    A detailed program and more information will be soon posted here. Watch this space!
                </p>
            </CenterSection>
            <Section header={<h1>How do I register?</h1>}>
                <p>
                   Fill in the form by clicking the "Registration" link below for your preferred town. We’ll contact you as soon as possible with information about whether you got a spot. The events are usually quite popular, so make sure to register as soon as possible.
                </p> 
            </Section>
            <AcademyLocationSection academies={academies} />
        </>
    )
}
