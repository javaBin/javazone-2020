import React, {useLayoutEffect} from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Seperator} from '../../components/Seperator/Seperator';
import {CenterSection} from '../../components/CenterSection/CenterSection';
import styles from './AcademyRegistration.module.scss';
import Link from "../../components/Link/Link";

function eventId(city: string) {
    if (city === 'oslo') return '22425';
    if (city === 'trondheim') return '22422';
    if (city === 'tromsø') return '22424';

    return null
}

function newHeight(height: number) {
    // @ts-ignore
    document.getElementById("checkout-iframe").style.height = `${height}px`
}

export function AcademyRegistrationPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city') || '';
    const id = city && eventId(city);

    const minHeight = 650;
    useLayoutEffect(() => {
        window.onmessage = (e: any) => {
            if (e.data.hasOwnProperty("frameHeight")) {
                const height: number = e.data.frameHeight;
                if (height < minHeight) {
                    newHeight(minHeight);
                } else if (height > minHeight) {
                    newHeight(height + 60);
                }
            }
        };
    }, []);

    const realCityName = city.charAt(0).toUpperCase() + city.slice(1);

    return (
        <>
            <VikingBanner header="JavaZone Academy" subHeader={`Register for Academy-${realCityName}`}
                        imagePath="2020/images/"/>
            <Seperator/>
            <CenterSection>
                <div className={styles.back}>
                    <Link url="/academy">
                        Back
                    </Link>
                </div>
                <iframe className={styles.iframe} id="checkout-iframe" width="100%" height={minHeight}
                        title="Checkout page" src={`/checkout.html#${id}`}/>
            </CenterSection>
        </>
    )
}
