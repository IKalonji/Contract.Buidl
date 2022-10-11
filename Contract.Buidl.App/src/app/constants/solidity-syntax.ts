import { License, Pragma, Comment, Version, ABICoderPragma, Import, 
    Constant, Contract, Interface, Library, StateVariable, Constructor, Struct, Enum, 
    Modifier, Fallback, Receive, UserDefinedValueType,  Event, Error, Using, Function, Parameter, Block} 
    from "../grammer/source-unit";

const FileItems: any[] = [
    new License(), new Import(), new Pragma(), new ABICoderPragma(), 
    new Version(), new Constant(), new Library(), new Interface(), 
    new Contract(), new Comment(), new Using()
];

const ContractItems: any[] = [ 
    new StateVariable(), new Comment(), new Constructor(), new Struct(), new Enum(), new Function(),
    new Modifier(), new Fallback(), new Receive(), new UserDefinedValueType(), new Event(),
    new Error(), new Using()
];

const ConstructorItems: any[] = [
    new Parameter(), new Block()
]

const StateMutability: any[] = [
    "pure", "view", "payable"
];

const Visibilty: any[] = [
    "internal", "external", "private", "public"
];

const DataLocation: any[] = [
    "memory", "storage", "calldata"
];

const Integers = function GenerateIntegerTypes() : string [] {
    let integerTypes: string[] = [];

    for(let i = 8; i <= 256; i += 8) {
        integerTypes.push(`int${i}`);
        integerTypes.push(`uint${i}`);
    }

    return integerTypes;
}

const Bytes = function GenerateByteTypes() : string [] {
    let byteTypes: string[] = [];

    for(let i = 1; i <= 32; i++) {
        byteTypes.push(`bytes${i}`);
    }

    return byteTypes;
}

const ElementaryTypes: any = [
    "address", "address payable", "bool", "string", "bytes", "wei", "gwei", "ether", "seconds",
    "minutes", "hours", "days", "weeks", "years", "int", "uint", ...Integers(), ...Bytes()
];

const BeforeOperators: {[key: string]: string} [] = [
    { "Name": "PreIncrement", "Value": "++" }, { "Name": "PreDecrement", "Value": "--" },
    { "Name": "Not", "Value": "!" }, { "Name": "BitWise Not", "Value": "~" },
    { "Name": "Delete", "Value": "delete " }, { "Name": "Negative", "Value": "-" }
];

const AfterOperators: {[key: string]: string} [] = [
    { "Name": "PostIncrement", "Value": "++" }, { "Name": "PostDecrement", "Value": "--" }
];

const LogicalOperators: {[key: string]: string} [] = [
    { "Name": "Power", "Value": "**" }, { "Name": "Add", "Value": "+" }, 
    { "Name": "Subtract", "Value": "-" }, { "Name": "Multiply", "Value": "*" }, 
    { "Name": "Divide", "Value": "/" }, { "Name": "Modulus", "Value": "%" }, 
    { "Name": "Bitwise AND", "Value": "&" }, { "Name": "BitWise OR", "Value": "|" }, 
    { "Name": "Bitwise XOR", "Value": "^" }, { "Name": "Left Shift", "Value": "<<" }, 
    { "Name": "Right Shift", "Value": ">>" }, { "Name": "Right Shift With Zero", "Value": ">>>" }
];

const CompareOperators: {[key: string]: string} [] = [
    { "Name": "Less Than", "Value": "<" }, { "Name": "Greater Than", "Value": ">" },
    { "Name": "Less Or Equal", "Value": "<=" }, { "Name": "Greater Or Equal", "Value": ">=" },
    { "Name": "Equal To", "Value": "== " }, { "Name": "Not Equal To", "Value": "!=" }
];

const AssignmentOperators: {[key: string]: string} [] = [
    { "Name": "Equal", "Value": "=" }, { "Name": "Add To", "Value": "+=" },
    { "Name": "Subtract From", "Value": "-=" }, { "Name": "Multiply With", "Value": "*=" },
    { "Name": "Divide With", "Value": "/=" }, { "Name": "Modulus Of", "Value": "%=" },
    { "Name": "Equal", "Value": "=" }, { "Name": "Add To", "Value": "+=" }
];

const Statements: any [] = [
    "If", "For", "While", "Do-While", "Continue", "Break", "Try-Catch", "Return"
];

const Expressions: any [] = [
    "Before", "After", "Compare", "Assignment", "Logic", "Literal", "Variable"
];


export {
    ContractItems, ConstructorItems, StateMutability, Visibilty, DataLocation, 
    ElementaryTypes, FileItems, Statements, LogicalOperators, CompareOperators,
    AssignmentOperators, AfterOperators, BeforeOperators, Expressions
}
