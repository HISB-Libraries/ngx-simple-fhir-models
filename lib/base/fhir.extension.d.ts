import { FhirElement } from "./fhir.element";
import { CodeableConcept } from "../r4/types/codeable-concept";
import { Coding } from "../r4/types/coding";
import { CodeType, StringType } from "./fhir.primitive";
import { Address } from "../r4/types/address";
import { Identifier } from "../r4/types/identifier";
export declare class Extension extends FhirElement {
    url: string;
    valueAddress?: Address;
    valueBoolean?: boolean;
    valueCode?: string;
    valueCodeableConcept?: CodeableConcept;
    valueCoding?: Coding;
    valueIdentifier?: Identifier;
    valueString?: string;
    constructor(url: string, value: StringType | CodeType, extensions?: Extension[]);
    validate(): void;
    getUrl(): string;
    getValue(): any;
    getExtensions(): Extension[] | undefined;
}
