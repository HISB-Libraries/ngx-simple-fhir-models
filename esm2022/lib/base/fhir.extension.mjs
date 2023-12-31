import { FhirElement } from "./fhir.element";
import { CodeType, StringType } from "./fhir.primitive";
const rule_1 = "An extension SHALL have either a value (i.e. a value[x] element) or sub-extensions, but not both. If" +
    "present, the value[x] element SHALL have content (value attribute or other elements)";
export class Extension extends FhirElement {
    constructor(url, value, extensions) {
        if (extensions)
            super(extensions);
        else
            super();
        this.url = url;
        if (value instanceof StringType)
            this.valueString = value.value;
        else if (value instanceof CodeType)
            this.valueCode = value.value;
    }
    validate() { }
    getUrl() {
        return this.url;
    }
    getValue() {
        const key = Object.keys(this).find(key => key.startsWith("value"));
        if (key)
            return this[key];
        else
            return undefined;
    }
    getExtensions() {
        return this.extension;
    }
}
// valueBase64Binary: base64Binary
// valueCanonical: canonical
// valueDate: date
// valueDateTime: dateTime
// valueDecimal: decimal
// valueId: id
// valueInstant: instant
// valueInteger: integer
// valueInteger64: integer64
// valueMarkdown: markdown
// valueOid: oid
// valuePositiveInt: positiveInt
// valueTime: time
// valueUnsignedInt: unsignedInt
// valueUri: uri
// valueUrl: url
// valueUuid: uuid
// valueAddress: Address
// valueAge: Age
// valueAnnotation: Annotation
// valueAttachment: Attachment
// valueCodeableReference: CodeableReference
// valueCoding: Coding
// valueContactPoint: ContactPoint
// valueCount: Count
// valueDistance: Distance
// valueDuration: Duration
// valueHumanName: HumanName
// valueIdentifier: Identifier
// valueMoney: Money
// valuePeriod: Period
// valueQuantity: Quantity
// valueRange: Range
// valueRatio: Ratio
// valueRatioRange: RatioRange
// valueReference: Reference - a reference to another resource
// valueSampledData: SampledData
// valueSignature: Signature
// valueTiming: Timing
// valueContactDetail: ContactDetail
// valueDataRequirement: DataRequirement
// valueExpression: Expression
// valueParameterDefinition: ParameterDefinition
// valueRelatedArtifact: RelatedArtifact
// valueTriggerDefinition: TriggerDefinition
// valueUsageContext: UsageContext
// valueAvailability: Availability
// valueExtendedContactDetail: ExtendedContactDetail
// valueDosage: Dosage
// valueMeta: Meta
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci5leHRlbnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc2ltcGxlLWZoaXItbW9kZWxzL3NyYy9saWIvYmFzZS9maGlyLmV4dGVuc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUl0RCxNQUFNLE1BQU0sR0FBRyxzR0FBc0c7SUFDbkgsc0ZBQXNGLENBQUM7QUFFekYsTUFBTSxPQUFPLFNBQVUsU0FBUSxXQUFXO0lBV3hDLFlBQ0ksR0FBVyxFQUNYLEtBQTRCLEVBQzVCLFVBQXdCO1FBRTFCLElBQUksVUFBVTtZQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs7WUFDN0IsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksS0FBSyxZQUFZLFVBQVU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDM0QsSUFBSSxLQUFLLFlBQVksUUFBUTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNuRSxDQUFDO0lBRUQsUUFBUSxLQUFJLENBQUM7SUFFTixNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFDTSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxHQUFHO1lBQUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ3JCLE9BQU8sU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFHRCxrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCLGNBQWM7QUFDZCx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QiwwQkFBMEI7QUFDMUIsZ0JBQWdCO0FBQ2hCLGdDQUFnQztBQUNoQyxrQkFBa0I7QUFDbEIsZ0NBQWdDO0FBQ2hDLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFDNUMsc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQyxvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCLDhEQUE4RDtBQUM5RCxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QixvQ0FBb0M7QUFDcEMsd0NBQXdDO0FBQ3hDLDhCQUE4QjtBQUM5QixnREFBZ0Q7QUFDaEQsd0NBQXdDO0FBQ3hDLDRDQUE0QztBQUM1QyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLG9EQUFvRDtBQUNwRCxzQkFBc0I7QUFDdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaGlyRWxlbWVudH0gZnJvbSBcIi4vZmhpci5lbGVtZW50XCI7XG5pbXBvcnQge0NvZGVhYmxlQ29uY2VwdH0gZnJvbSBcIi4uL3I0L3R5cGVzL2NvZGVhYmxlLWNvbmNlcHRcIjtcbmltcG9ydCB7Q29kaW5nfSBmcm9tIFwiLi4vcjQvdHlwZXMvY29kaW5nXCI7XG5pbXBvcnQge0NvZGVUeXBlLCBTdHJpbmdUeXBlfSBmcm9tIFwiLi9maGlyLnByaW1pdGl2ZVwiO1xuaW1wb3J0IHtBZGRyZXNzfSBmcm9tIFwiLi4vcjQvdHlwZXMvYWRkcmVzc1wiO1xuaW1wb3J0IHtJZGVudGlmaWVyfSBmcm9tIFwiLi4vcjQvdHlwZXMvaWRlbnRpZmllclwiO1xuXG5jb25zdCBydWxlXzEgPSBcIkFuIGV4dGVuc2lvbiBTSEFMTCBoYXZlIGVpdGhlciBhIHZhbHVlIChpLmUuIGEgdmFsdWVbeF0gZWxlbWVudCkgb3Igc3ViLWV4dGVuc2lvbnMsIGJ1dCBub3QgYm90aC4gSWZcIiArXG4gIFwicHJlc2VudCwgdGhlIHZhbHVlW3hdIGVsZW1lbnQgU0hBTEwgaGF2ZSBjb250ZW50ICh2YWx1ZSBhdHRyaWJ1dGUgb3Igb3RoZXIgZWxlbWVudHMpXCI7XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb24gZXh0ZW5kcyBGaGlyRWxlbWVudCB7XG4gIHVybDogc3RyaW5nO1xuXG4gIHZhbHVlQWRkcmVzcz86IEFkZHJlc3M7XG4gIHZhbHVlQm9vbGVhbj86IGJvb2xlYW47XG4gIHZhbHVlQ29kZT86IHN0cmluZztcbiAgdmFsdWVDb2RlYWJsZUNvbmNlcHQ/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gIHZhbHVlQ29kaW5nPzogQ29kaW5nO1xuICB2YWx1ZUlkZW50aWZpZXI/OiBJZGVudGlmaWVyO1xuICB2YWx1ZVN0cmluZz86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHVybDogc3RyaW5nLFxuICAgICAgdmFsdWU6IFN0cmluZ1R5cGUgfCBDb2RlVHlwZSxcbiAgICAgIGV4dGVuc2lvbnM/OiBFeHRlbnNpb25bXVxuICApIHtcbiAgICBpZiAoZXh0ZW5zaW9ucykgc3VwZXIoZXh0ZW5zaW9ucyk7XG4gICAgZWxzZSBzdXBlcigpO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZ1R5cGUpIHRoaXMudmFsdWVTdHJpbmcgPSB2YWx1ZS52YWx1ZTtcbiAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENvZGVUeXBlKSB0aGlzLnZhbHVlQ29kZSA9IHZhbHVlLnZhbHVlO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7fVxuXG4gIHB1YmxpYyBnZXRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51cmw7XG4gIH1cbiAgcHVibGljIGdldFZhbHVlKCk6IGFueSB7XG4gICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXModGhpcykuZmluZChrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoXCJ2YWx1ZVwiKSk7XG4gICAgaWYgKGtleSkgcmV0dXJuIHRoaXNba2V5XTtcbiAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcHVibGljIGdldEV4dGVuc2lvbnMoKTogRXh0ZW5zaW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbjtcbiAgfVxufVxuXG5cbi8vIHZhbHVlQmFzZTY0QmluYXJ5OiBiYXNlNjRCaW5hcnlcbi8vIHZhbHVlQ2Fub25pY2FsOiBjYW5vbmljYWxcbi8vIHZhbHVlRGF0ZTogZGF0ZVxuLy8gdmFsdWVEYXRlVGltZTogZGF0ZVRpbWVcbi8vIHZhbHVlRGVjaW1hbDogZGVjaW1hbFxuLy8gdmFsdWVJZDogaWRcbi8vIHZhbHVlSW5zdGFudDogaW5zdGFudFxuLy8gdmFsdWVJbnRlZ2VyOiBpbnRlZ2VyXG4vLyB2YWx1ZUludGVnZXI2NDogaW50ZWdlcjY0XG4vLyB2YWx1ZU1hcmtkb3duOiBtYXJrZG93blxuLy8gdmFsdWVPaWQ6IG9pZFxuLy8gdmFsdWVQb3NpdGl2ZUludDogcG9zaXRpdmVJbnRcbi8vIHZhbHVlVGltZTogdGltZVxuLy8gdmFsdWVVbnNpZ25lZEludDogdW5zaWduZWRJbnRcbi8vIHZhbHVlVXJpOiB1cmlcbi8vIHZhbHVlVXJsOiB1cmxcbi8vIHZhbHVlVXVpZDogdXVpZFxuLy8gdmFsdWVBZGRyZXNzOiBBZGRyZXNzXG4vLyB2YWx1ZUFnZTogQWdlXG4vLyB2YWx1ZUFubm90YXRpb246IEFubm90YXRpb25cbi8vIHZhbHVlQXR0YWNobWVudDogQXR0YWNobWVudFxuLy8gdmFsdWVDb2RlYWJsZVJlZmVyZW5jZTogQ29kZWFibGVSZWZlcmVuY2Vcbi8vIHZhbHVlQ29kaW5nOiBDb2Rpbmdcbi8vIHZhbHVlQ29udGFjdFBvaW50OiBDb250YWN0UG9pbnRcbi8vIHZhbHVlQ291bnQ6IENvdW50XG4vLyB2YWx1ZURpc3RhbmNlOiBEaXN0YW5jZVxuLy8gdmFsdWVEdXJhdGlvbjogRHVyYXRpb25cbi8vIHZhbHVlSHVtYW5OYW1lOiBIdW1hbk5hbWVcbi8vIHZhbHVlSWRlbnRpZmllcjogSWRlbnRpZmllclxuLy8gdmFsdWVNb25leTogTW9uZXlcbi8vIHZhbHVlUGVyaW9kOiBQZXJpb2Rcbi8vIHZhbHVlUXVhbnRpdHk6IFF1YW50aXR5XG4vLyB2YWx1ZVJhbmdlOiBSYW5nZVxuLy8gdmFsdWVSYXRpbzogUmF0aW9cbi8vIHZhbHVlUmF0aW9SYW5nZTogUmF0aW9SYW5nZVxuLy8gdmFsdWVSZWZlcmVuY2U6IFJlZmVyZW5jZSAtIGEgcmVmZXJlbmNlIHRvIGFub3RoZXIgcmVzb3VyY2Vcbi8vIHZhbHVlU2FtcGxlZERhdGE6IFNhbXBsZWREYXRhXG4vLyB2YWx1ZVNpZ25hdHVyZTogU2lnbmF0dXJlXG4vLyB2YWx1ZVRpbWluZzogVGltaW5nXG4vLyB2YWx1ZUNvbnRhY3REZXRhaWw6IENvbnRhY3REZXRhaWxcbi8vIHZhbHVlRGF0YVJlcXVpcmVtZW50OiBEYXRhUmVxdWlyZW1lbnRcbi8vIHZhbHVlRXhwcmVzc2lvbjogRXhwcmVzc2lvblxuLy8gdmFsdWVQYXJhbWV0ZXJEZWZpbml0aW9uOiBQYXJhbWV0ZXJEZWZpbml0aW9uXG4vLyB2YWx1ZVJlbGF0ZWRBcnRpZmFjdDogUmVsYXRlZEFydGlmYWN0XG4vLyB2YWx1ZVRyaWdnZXJEZWZpbml0aW9uOiBUcmlnZ2VyRGVmaW5pdGlvblxuLy8gdmFsdWVVc2FnZUNvbnRleHQ6IFVzYWdlQ29udGV4dFxuLy8gdmFsdWVBdmFpbGFiaWxpdHk6IEF2YWlsYWJpbGl0eVxuLy8gdmFsdWVFeHRlbmRlZENvbnRhY3REZXRhaWw6IEV4dGVuZGVkQ29udGFjdERldGFpbFxuLy8gdmFsdWVEb3NhZ2U6IERvc2FnZVxuLy8gdmFsdWVNZXRhOiBNZXRhXG4iXX0=