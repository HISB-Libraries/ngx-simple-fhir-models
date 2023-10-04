import { FhirType } from "../../base/fhir.type";
export declare class Coding extends FhirType {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}
