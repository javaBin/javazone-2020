import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import Link from '../../components/Link/Link';
import { Seperator } from '../../components/Seperator/Seperator';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { Zap, BookOpen, Monitor } from 'react-feather';
import classnames from 'classnames';
import styles from './Speakers.module.scss';
import Timeline from './Timeline/Timeline';
import { PresentationFormat } from '../../core/models/PresentationFormat.model';
import { lightning, presentation, workshop } from '../../core/data/PresentationFormats.data';


export function SpeakersPage() {
    return (
        <>
            <PageBanner header="Call for Speakers" subHeader="Speak at JavaZone 2020" imageName="2018/180913_JavaZone_0010" />
            <Seperator />
            <Section header={<h1>About JavaZone</h1>}>
                <p>
                    JavaZone 2020 will be the 20th consecutive JavaZone conference and will consist of a day of pre-conference workshops on September 9th, followed by two days of lightning talks and presentations on September 9th and 10th.
                </p>
                <p>
                    Last year's event was completely sold out, with more than 3200 attendees enjoying 127 sessions.
                </p>
                <p>
                    JavaZone hosts both international and Norwegian speakers. We'd love to have you join us in 2020!
                </p>
                <p>
                    Our call for speakers opens February 3rd.
                </p>
                {/*<Link external url="https://talks.javazone.no">Submit your talk!</Link>*/}
            </Section>
            <ImageSection bottom imageName="2018/180912_JavaZone_0039" />
            <Seperator />
            <Section header={<h1>What is it like speaking at JavaZone?</h1>}>
                <p>
                    Over the last decade JavaZone has grown to become one of the most important Java events in Europe! You can see for yourself – over 1300 videos from previous years talks are available for free at <InlineLink external url='https://vimeo.com/javazone'>Vimeo</InlineLink>, and the <InlineLink external url='https://2019.javazone.no/program'>full program from JavaZone 2019</InlineLink> is also available.
                </p>
                <p>
                    We can brag as much as we want, but JavaZone would be nothing without all the great speakers! That's why we need your help to make sure that JavaZone 2020 will be at least as awesome as the earlier events. If you think you have something interesting to share, please submit your talk or workshop in February.
                </p>
                <p>
                    JavaZone is committed to diversity, and we are especially interested in quality submissions from groups that are under-represented in tech.
                </p>
            </Section>
            <ImageSection imageName="partners_1" />
            <Seperator />

            <Section header={<h1>Formats and Durations</h1>}>
                <p>
                    You should think about which format your talk will work best in. Are you presenting a new idea, or do you require more time to elaborate on your subject? How hands-on do you want to be? We have three formats you can present your material in.
                </p>
            </Section>
            <CenterSection>
                <ul className={styles.formatList}>
                    <Format {...lightning} />
                    <Format {...presentation} />
                    <Format {...workshop} />
                </ul>
            </CenterSection>
            {/*<Section header={<h1>Get Some Inspiration</h1>}>
                <h3>Workshop for Potential Speakers</h3>
                <p>
                    On March 12th, we will be <InlineLink external url='https://www.meetup.com/javaBin/events/258787075'>hosting a workshop</InlineLink> for all those considering submitting a talk to JavaZone. More information and the registation link will be posted here later.
                </p>
            </Section>*/}
            <Section header={<h1>Audience and Topics</h1>}>
                <p>
                    JavaZone is a conference for developers and technical architects, with an emphasis on technical talks. However, we are open to talks about other areas, including methodology, project management, and other topics related to programming.
                </p>
                <p>
                    Despite our conference's name, we do not limit our content to Java technology. We will consider all talks based on their relevance to developers and technical architects. We do however set a focus on technology surrounding the JVM when selecting talks.
                </p>
            </Section>
            <Section header={<h1>Ongoing Evaluation of Talks</h1>}>
                <p>
                    Each year we receive hundreds of submissions and we consider each submission as it arrives. Due to a large number of submissions, we can however not guarantee that you will hear from us immediately. We do however answer all submissions and try to do so no later than in July.
                </p>
                {/*<p>
                    Our advice to you is simple. <strong>Submit early!</strong> The earlier you submit, the more likely you are to be noticed. Avoid drowning in the end-of-Call for Speakers-tsunami!
                </p>*/}
                <br />
                {/*<Link url='/speakers/tips'>
                    Some tips and tricks about your submission
                </Link>*/}
            </Section>
            {/*<CenterSection header={<h1>Dates & Deadlines for JavaZone 2019</h1>}>
                <Timeline />
            </CenterSection>*/}
            <Section header={<h1>What’s in it for me?</h1>}>
                <h3>Accepted presentations, lightning talks, and workshops</h3>
                <p>
                    As a JavaZone speaker, you get free admission to the conference. Additionally, you are also invited to the speakers' dinner, held on September 8th. Finally, you can apply for a place on JourneyZone, our annual speaker adventure.
                </p>
                <h3>Coverage of Expenses</h3>
                <p>
                    Please see our <InlineLink external url='/speakers/monetary-policy'>reimbursement policy</InlineLink> if you have any questions regarding coverage of other expenses.
                </p>
            </Section>
            <Section header={<h1>Important principles</h1>}>
                <p>
                    JavaZone is proud to be an independent and community-driven conference. It is organized by volunteers from <InlineLink external url="https://javabin.no">javaBin</InlineLink> (the Norwegian Java User Group) and is run as a non-profit organization. This means that we have three important principles for selecting talks:
                </p>
                <ul>
                    <li>We do not sell speaker slots.</li>
                    <li>We do not accept sales pitches masked as presentations</li>
                    <li>We do not differentiate between speakers from partners and independent speakers</li>
                </ul>
                <p>
                    If your talk adheres to these very important principles, you are more than welcome to submit it to our Call for Speakers!
                </p>
            </Section>
            <CenterSection header={<h1>We hope to see you at JavaZone 2020 – please feel free to spread the word to your local community!</h1>}>
                <p>
                    Best regards,<br />the JavaZone Program Committee
                </p>
            </CenterSection>
        </>
    )
}

function Format(props: PresentationFormat) {

    function getIconElement(icon: string) {
        switch(icon) {
            case 'zap': return <Zap size={36} />
            case 'book-open': return <BookOpen size={36} />
            case 'monitor': return <Monitor size={36} />
        }
    }

    return (
        <li>
            {getIconElement(props.icon)}
            <h3 className={classnames(styles.format, styles.title)}>{props.title}</h3>
            <p className={classnames(styles.format, styles.length)}>{props.length}</p>
            <p className={classnames(styles.format, styles.description)}>{props.description}</p>
        </li>
    );
};
