import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { Seperator } from '../../components/Seperator/Seperator';
import { List } from '../../components/List/List';

export function CoronaPage() {
    return (
        <>
            <PageBanner header="Information about JavaZone in context of COVID-19" subHeader="" imageName="2018/180913_JavaZone_0010" />
            <Seperator />
            <Section header={<h1>Information</h1>}>
                <p>
                    Due to the rapid development of the COVID-19 outbreak, we are currently considering backup plans in the case that JavaZone is affected. Although we are hoping for the best, we will continue to monitor future developments and ensure that our conference is conducted in the best interests of our attendees health.                </p>
                <p>
                    If JavaZone 2020 cannot be conducted as usual, we are considering several options, including:
                    <List>
                        <li>Moving the conference to a later date when the outbreak is under control.</li>
                        <li>Reducing the scope of the conference to Norwegian residents whilst assisting non-residents to present their sessions remotely.</li>
                        <li>Cancelling the physical conference and transforming it into a virtual event.</li>
                    </List>
                </p>
                <p>
                    In the event that the conference cannot be run as a physical event on the planned days in September, we will contact all speakers and ticket holders and offer cancelations and refunds to those who are not interested in participating in the altered event. At this point, we are however hopeful that this will not be necessary and recommend planning your JavaZone experience as usual.
                </p>
            </Section>
        </>
    )
}
