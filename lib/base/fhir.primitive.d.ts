export declare class PrimitiveType {
    constructor(value: any);
    value: any;
    getValue(): any;
}
export declare class StringType extends PrimitiveType {
    constructor(value: string);
    value: string;
    getValue(): string;
}
export declare class CodeType extends PrimitiveType {
    constructor(value: string);
    value: string;
    getValue(): string;
}
export declare class InstantType extends PrimitiveType {
    regex: RegExp;
    constructor(value: string);
    value: string;
    getValue(): string;
}
export declare class UriType extends PrimitiveType {
    constructor(value: string);
    value: string;
    getValue(): string;
}
