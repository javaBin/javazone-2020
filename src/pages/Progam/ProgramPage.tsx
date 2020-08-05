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
                    Some information about how the online session will work will be here
                </p>
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
