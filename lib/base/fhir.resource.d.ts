export interface FhirResource extends Object {
    resourceType: string;
    id?: string;
    meta?: any;
    implicitRules?: string;
    language?: string;
    [key: string]: any;
}
