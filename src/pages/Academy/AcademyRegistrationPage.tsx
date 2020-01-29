import React, {useLayoutEffect} from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';

function newHeight(height: number){
    // @ts-ignore
    document.getElementById("checkout-iframe").style.height = `${height}px`
}

export function AcademyRegistrationPage() {
    const minHeight = 650;
    useLayoutEffect(() => {
        window.onmessage = (e: any) => {
            if (e.data.hasOwnProperty("frameHeight")) {
                const height: number = e.data.frameHeight;
                if (height < minHeight){
                    newHeight(minHeight);
                } else if (height > minHeight) {
                    newHeight(height + 60);
                }

            }
        };
    }, []);

    return (
        <>
            <PageBanner header="JavaZone Academy" subHeader="A free taste of JavaZone for IT-students!" imageName="academy" />
            <Seperator />
            <CenterSection>
                <iframe id="checkout-iframe" width="100%" height={minHeight} title="Checkout page" src="/checkout.html#22424"/>
            </CenterSection>
        </>
    )
}
