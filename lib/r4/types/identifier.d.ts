import { Period } from "./period";
import { CodeableConcept } from "./codeable-concept";
import { FhirType } from "../../base/fhir.type";
export declare class Identifier extends FhirType {
    use: string;
    type: CodeableConcept;
    system: string;
    value: string;
    period: Period;
}
