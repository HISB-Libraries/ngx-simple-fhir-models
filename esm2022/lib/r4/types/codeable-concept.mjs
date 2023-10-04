import { FhirType } from "../../base/fhir.type";
export class CodeableConcept extends FhirType {
    constructor(codeableConcept) {
        super();
        if (codeableConcept.text)
            this.text = codeableConcept.text;
        if (codeableConcept.coding)
            this.coding = codeableConcept.coding;
    }
    toString() {
        return this.text ?? this.coding?.[0]?.display ?? undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWFibGUtY29uY2VwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zaW1wbGUtZmhpci1tb2RlbHMvc3JjL2xpYi9yNC90eXBlcy9jb2RlYWJsZS1jb25jZXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxRQUFRO0lBQzNDLFlBQVksZUFBb0I7UUFDOUIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLGVBQWUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQzNELElBQUksZUFBZSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDbkUsQ0FBQztJQUllLFFBQVE7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLElBQUksU0FBUyxDQUFDO0lBQzdELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29kaW5nfSBmcm9tIFwiLi9jb2RpbmdcIjtcbmltcG9ydCB7RmhpclR5cGV9IGZyb20gXCIuLi8uLi9iYXNlL2ZoaXIudHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgQ29kZWFibGVDb25jZXB0IGV4dGVuZHMgRmhpclR5cGUge1xuICBjb25zdHJ1Y3Rvcihjb2RlYWJsZUNvbmNlcHQ6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGNvZGVhYmxlQ29uY2VwdC50ZXh0KSB0aGlzLnRleHQgPSBjb2RlYWJsZUNvbmNlcHQudGV4dDtcbiAgICBpZiAoY29kZWFibGVDb25jZXB0LmNvZGluZykgdGhpcy5jb2RpbmcgPSBjb2RlYWJsZUNvbmNlcHQuY29kaW5nO1xuICB9XG4gIGNvZGluZzogQ29kaW5nW107XG4gIHRleHQ6IHN0cmluZztcblxuICBwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0ID8/IHRoaXMuY29kaW5nPy5bMF0/LmRpc3BsYXkgPz8gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=