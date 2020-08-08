import {PageBanner} from "../../components/PageBanner/PageBanner";
import {Seperator} from "../../components/Seperator/Seperator";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";
import {VRProgram} from "../../components/VRProgram/VRProgram";


export function ProgramPage(){
    return (
        <>
            <PageBanner header="JavaZone VR Program 2020" subHeader="Mark your schedule" imageName="2018/180913_JavaZone_0010" />
            <Seperator />
            <CenterSection header={<h1>Information</h1>}>
                <p>
                    JavaZone VR will have four parallell tracks, and you can follow them stream lived here the whole day.  
                </p>
                <ul>
                    <li>We will host a live track from Teknologihuset in Oslo.</li>
                    <li>The second track will be at our partners NAV in Oslo.</li>
                    <li>The third track will be live from our partners Kantega in Trondheim</li>
                    <li>The final track will be a online track from speakers from all over the world</li>
                </ul>
                <p>
                    See below for a detailed program. And watch this space for updates on how to watch them live!
                </p>
            </CenterSection>
            <CenterSection header={<h1>Program</h1>}>
                <VRProgram />
            </CenterSection>
        </>
    )
};
