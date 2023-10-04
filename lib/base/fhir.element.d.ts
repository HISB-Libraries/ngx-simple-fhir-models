import { Extension } from "./fhir.extension";
import { FhirBase } from "./fhir.base";
export declare class FhirElement implements FhirBase {
    constructor(extensions?: Extension[]);
    id?: string;
    extension?: Extension[];
}
