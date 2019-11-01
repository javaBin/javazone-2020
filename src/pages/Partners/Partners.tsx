import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { Section } from '../../components/Section/Section';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { InlineLink } from '../../components/InlineLink/InlineLink';

export function PartnersPage() {
    return (
        <>
            <PageBanner header="Partner love <3" subHeader="September 9th - 10th, 2020" imageName="partners_2" />
            <Seperator />
            <CenterSection header={<h1>JavaZone 2020: Bigger and better than ever</h1>}>
                <p>
                    JavaZone started out in 2001 as a small conference for Java developers but has since then evolved to become one of the largest developer conferences in the world. Each year thousands of people gather in Oslo Spektrum for three full days of learning, mingling, and fun!
                </p>
            </CenterSection>
            <Section header={<h1>Last four years: Completely. Sold. Out.</h1>}>
                <p>
                    Last year, a record breaking 3200 people attended JavaZone. We were completely sold out of tickets AND partner stands. The same happened last year, and the year before, and the year before. So you might want to join in early if you want to be part of the conference!
                </p>
            </Section>
            <Section header={<h1>Our philosophy: Partners, not sponsors</h1>}>
                <p>
                    We want JavaZone‘s Expo Area to be an attractive space where our partners and participants can hang out and spend time together. In previous years, our partners have done a great job helping us achieve this goal, and we look forward to seeing what they bring to JavaZone 2020! JavaZone’s Expo Area is a vibrant, busy space full of life and activity. As a partner you are not just supporting our conference economically – you participate in the event and help creating a unique atmosphere. We work closely with our partners to help them realize their ideas and make the most out of their stands. Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                </p>
            </Section>
            <ImageSection bottom imageName="2018/180912_JavaZone_0098" />
            <Seperator />
            <CenterSection header={<h1>The Expo Area</h1>}>
                <p>
                    All our partner stands are traditionally located in the Expo Area, which is located in the center of the venue. During each break, the Expo is full of attendees. This is partly because we continuously serve food from the restaurant stands – throughout the day, and partly because of you – our partners – make this area one of the liveliest Expo Areas of any conference.
                </p>
            </CenterSection>
            <Section header={<h1>Partner Options</h1>}>
                <p>
                    Information about partner options will be announced at a later date.
                </p>             
            </Section>
            <ImageSection imageName="2018/180912_JavaZone_0158" />
            <Seperator />
            <CenterSection header={<h1>Contact us</h1>}>
                <p>You can contact us about partnership details at <InlineLink external url="mailto:partner@java.no">partner@java.no</InlineLink></p>
            </CenterSection>
        </>
    )
}
