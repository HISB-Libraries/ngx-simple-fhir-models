import { Coding } from "./coding";
import { FhirType } from "../../base/fhir.type";
export declare class CodeableConcept extends FhirType {
    constructor(codeableConcept: any);
    coding: Coding[];
    text: string;
    toString(): string;
}
