import { DomainResource } from "../../base/fhir.domain-resource";
import { AdministrativeGender } from "../value-sets/administrative-gender";
export declare class Patient implements DomainResource {
    resourceType: string;
    gender?: AdministrativeGender;
    [key: string]: any;
}
