class FhirElement {
    constructor(extensions) {
        if (extensions)
            this.extension = extensions;
    }
}

class Patient {
    constructor() {
        this.resourceType = "Patient";
    }
}

/*
 * Public API Surface of ngx-simple-fhir-models
 */
/*
 * Base Models
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FhirElement, Patient };
//# sourceMappingURL=ngx-simple-fhir-models.mjs.map
