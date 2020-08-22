import {PageBanner} from "../../components/PageBanner/PageBanner";
import {Seperator} from "../../components/Seperator/Seperator";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";
import {VRProgram} from "../../components/VRProgram/VRProgram";
import {List} from "../../components/List/List";
import {Section} from "../../components/Section/Section";


export function ProgramPage(){
    return (
        <>
            <PageBanner header="JavaZone VR Program 2020" subHeader="Mark your schedule" imageName="2018/180913_JavaZone_0010" />
            <Seperator />
            <CenterSection header={<h1>Information</h1>}>
                <p>
                    JavaZone VR will have four parallel tracks all of which will be streamed live on this page!
                </p>
                <p>
                    Please note that all given times are in Oslo time (CEST/ UTC+2).
                </p>
            </CenterSection>
            <Section header={<h1>The different tracks</h1>}>
                <p>
                    <List>
                        <li>The first track will be streamed live from Teknologihuset in Oslo.</li>
                        <li>Our partner Nav in Oslo will host the second track.</li>
                        <li>Our partner Kantega will host the third track from their location in Trondheim.</li>
                        <li>The final track will be a purely virtual track featuring speakers from all over the world.</li>
                    </List>
                </p>
                <p>
                    See below for a detailed program. And watch this space for updates on how to watch them live!
                </p>
            </Section>
            <CenterSection header={<h1>Program</h1>}>
                <VRProgram />
            </CenterSection>
        </>
    )
};
