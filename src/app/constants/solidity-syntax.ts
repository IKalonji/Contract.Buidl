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
]

export {
    FileItems, ContractItems, ConstructorItems, StateMutability, Visibilty, DataLocation
}