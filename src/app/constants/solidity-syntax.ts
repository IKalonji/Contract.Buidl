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

const ArithmeticOperators: {[key: string]: string} [] = [
    { "Name": "Addition", "Value": "+" }, { "Name": "Subtraction", "Value": "-" }, 
    { "Name": "Multiplication", "Value": "*" }, { "Name": "Division", "Value": "/" }, 
    { "Name": "Modulus", "Value": "%" }, { "Name": "Increment", "Value": "++" },
    { "Name": "Decrement", "Value": "--" }
];

const RelationalOperators: {[key: string]: string} [] = [
    { "Name": "Equal", "Value": "==" }, { "Name": "Not Equal", "Value": "!=" }, 
    { "Name": "Greater Than", "Value": ">" }, { "Name": "Less Than", "Value": "<" }, 
    { "Name": "Greater Than or Equal", "Value": ">=" }, { "Name": "Less Than or Equal", "Value": "<=" }
];

const LogicalOperators: {[key: string]: string} [] = [
    { "Name": "Logical AND", "Value": "&&" }, { "Name": "Logical OR", "Value": "||" }, 
    { "Name": "Logical NOT", "Value": "!" }
];

const BitwiseOperators: {[key: string]: string} [] = [
    { "Name": "Bitwise AND", "Value": "&" }, { "Name": "BitWise OR", "Value": "|" }, 
    { "Name": "Bitwise XOR", "Value": "^" }, { "Name": "Bitwise NOT", "Value": "~" }, 
    { "Name": "Left Shift", "Value": "<<" }, { "Name": "Right Shift", "Value": ">>" }, 
    { "Name": "Right Shift With Zero", "Value": ">>>" }
];

const BitwiseAssignmentOperators = function GenerateBitwiseAssignmentOperators() : {[key: string]: string} [] {
    return BitwiseOperators.map(o => ({ "Name": `${o['Name']} Assignment`, "Value": `${o['Value']}=` }));
}

const AssignmentExpressions: {[key: string]: string} [] = [
    { "Name": "Equal Assignment", "Value": "=" }, { "Name": "Add Assignment", "Value": "+=" }, 
    { "Name": "Subtract Assignment", "Value": "-=" }, { "Name": "Multiply Assignment", "Value": "*=" }, 
    { "Name": "Divide Assignment", "Value": "/=" }, { "Name": "Modulus Assignment", "Value": "%=" },
    ...BitwiseAssignmentOperators()
];


export {
    ContractItems, ConstructorItems, StateMutability, Visibilty, DataLocation, 
    ElementaryTypes, RelationalOperators, ArithmeticOperators, LogicalOperators, BitwiseOperators,
    AssignmentExpressions, FileItems
}
