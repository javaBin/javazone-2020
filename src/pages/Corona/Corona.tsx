import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { Seperator } from '../../components/Seperator/Seperator';
import { List } from '../../components/List/List';
import {CenterSection} from "../../components/CenterSection/CenterSection";
import {InlineLink} from "../../components/InlineLink/InlineLink";

export function CoronaPage() {
    return (
        <>
            <PageBanner header="Information about JavaZone in context of COVID-19" subHeader="" imageName="2018/180913_JavaZone_0010" />
            <Seperator />
            <Section header={<h1>Information</h1>}>
                <p>
                    Due to the COVID-19 outbreak we have decided to postphone JavaZone 2020 untl January 2021. The conference will be held on January 20th and 21st (With workshops on January 19th). In addition we will try a new concept: JavaZone VR. This will be an online conference held on September 9th.
                </p>
            </Section>
            <CenterSection header={<h1>Frequently asked questions (FAQ)</h1>}/>
            <Section header={<h1>So I have already bought a ticket, is it still valid?</h1>}>
                <p>
                    Yes, of course. Your ticket is valid for the conference in January. Participation in the JavaZone VR conference in September is also included.
                </p>
            </Section>
            <Section header={<h1>I already have a ticket, but I cannot attend in January, can I get a refund?</h1>}>
                <p>
                    Sure. Just send a mail to <InlineLink external noBlankTarget url="mailto:javazone@java.no">javazone@java.no</InlineLink> and we will refund the full ticket price minus a small processing fee (to cover credit card fees or invoice fees). The refund offer is valid until November 1st.
                </p>
            </Section>
            <Section header={<h1>What will the format of the conference in January be?</h1>}>
                <p>
                    This will be the traditional JavaZone experience. We will host it in Oslo Spektrum. There will be food and coffee and other beverages as usual. Oslo Spektrum is a huge venue and we are confident that we will be able to arrange JavaZone in a safe manner and comply to the rules and recommendations from the authorities.
                </p>
            </Section>
            <Section header={<h1>So what is this JavaZone VR conference?</h1>}>
                <p>
                    JavaZone VR is an online conference which will be arranged on September 9th. We will try to recreate the JavaZone experience as closely as possible, only we will do it online insted of as a physical event. More information will follow in the coming weeks, so stay tuned.
                </p>
            </Section>
            <Section header={<h1>What about JavaZone 2021, will that be happening in September 2021?</h1>}>
                <p>
                    Yes, that is our current plan.
                </p>
            </Section>
        </>
    )
}
