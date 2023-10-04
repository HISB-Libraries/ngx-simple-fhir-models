import { FhirResource } from "../../base/fhir.resource";
import { FhirType } from "../../base/fhir.type";
export declare class Address extends FhirType {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    toString(): string;
    constructor(resource?: FhirResource);
}
