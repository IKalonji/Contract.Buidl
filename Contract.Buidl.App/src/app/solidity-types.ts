const Types: {[key:string]: string}[] = [
    { name: "Boolien", value: "bool" },
    { name: "Integer", value: "int" },
    { name: "Unsigned Integer", value: "uint" },
    { name: "Fixed Point Numbers", value: "fixed" },
    { name: "Unsigned Fixed Point Numbers", value: "ufixed" },
    { name: "Address", value: "address" },
    { name: "Address Payable", value: "address payable" },
    { name: "Byte Array", value: "bytes" },
    { name: "String", value: "string" }
]

const VariableModifiers: {[key:string]: string}[] = [
    { name: "Constant", value: "constant" },
    { name: "Immutable", value: "immutable" }
]

const FunctionModifiers: {[key:string]: string}[] = [
    { name: "Internal", value: "internal" },
    { name: "External", value: "external" }
]