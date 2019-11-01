import { partners } from "./data";

export function getAcademyPartners(academyPartners: string[]) {
    return partners.filter(partner => {
        return academyPartners.indexOf(partner.name) !== -1;
    });
}