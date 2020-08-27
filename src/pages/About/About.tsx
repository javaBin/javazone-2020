import React from 'react';
import { VikingBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { List } from '../../components/List/List';
import {Figure} from "../../components/Figure/Figure";

export function AboutUsPage() {
    return (
        <>
            <VikingBanner header="JavaZone: The biggest community-driven Java conference" subHeader="What is it? Who is behind it?"/>
            <Section color="green" header={<h1>What is JavaZone?</h1>}>
                <p>
                    JavaZone is the biggest community-driven Java conference that has been organized in Oslo, Norway since 2001. It is organized on a voluntary basis by a group of people from <InlineLink color="green" external url="https://java.no">javaBin</InlineLink>, the Norwegian Java User Group, working around the year and putting many hours to create an amazing conference experience for you.
                </p>
                <p>    
                    Our goal is to organize a community-driven conference for developers where they can learn new things, share knowledge, and socialize.
                </p>
                <p>
                    We are happy to see the event grow bigger and better every year. In 2019 we hosted over 3200 participants and 160 speakers across 7 parallel tracks over the course of two days. In addition, we also offered a selection of 11 workshops held on the day before the conference started.
                </p>
            </Section>
            <Figure name="duke"/>
            <Section color="green" header={<h1>Who is behind it?</h1>}>
                <p>
                    Organizing a conference of this size on a voluntary basis is a lot of hard work (and it is great fun too!). The conference organization is represented by the JavaZone Core Team – a group of main organizers of the conference, where each representative is responsible for one or several areas or is leading a group of other JUG members. An example of such groups can be Program Committee, IT systems, etc.
                </p>
                <p>
                    The JavaZone Core Team for 2020:
                    <List>
                        <li><em>Leader</em> – <InlineLink color="green" url="javazone@java.no">javazone@java.no</InlineLink> – Anders Karlsen</li>
                        <li><em>Program Committee</em> – <InlineLink color="green" url="program@java.no">program@java.no</InlineLink> – Rafael Winterhalter</li>
                        <li><em>Partners</em> – <InlineLink color="green" url="partner@java.no">partner@java.no</InlineLink> – Gareth Western</li>
                        <li><em>Volunteers</em> – <InlineLink color="green" url="student@java.no">student@java.no</InlineLink> – Livar Bergheim</li>
                    </List>
                </p>
                <p>
                    Being the biggest community-driven conference would not have been easy without all the partners, event coordinators, and subcontractors, so we would like to thank them as well! Thank you, all!
                </p>
                <p>
                    If you have any questions or comments, you can always reach the Core Team at <InlineLink color="green" url="mailto:javazone@java.no">javazone@java.no</InlineLink>.
                </p>
            </Section>
        </>
    )
}


