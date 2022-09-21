import { v4 as uuidv4 } from 'uuid';

class BaseItem {
    uuid: string = "";
    name: string = "";
    output: string = "";
    
    constructor(name: string) {
        this.uuid = uuidv4();
        this.name = name;
    }

    generateStatement(): string {
        return this.output;
    };
}

class License extends BaseItem {
    license?: string = "";

    constructor() {
        super("License");
        this.license = "";
    }

    override generateStatement(): string {
        if(this.license) {
            this.output = "// SPDX-License-Identifier: " + this.license;
        }
        return this.output;
    }
}

class Pragma extends BaseItem {
    token?: string = "";

    constructor() {
        super("Pragma");
    }

    override generateStatement(): string {
        if(this.token) {
            this.output = "pragma " + this.token + ";";
        }
        return this.output;
    }
}

class Comment extends BaseItem {
    text?: string = "";

    constructor() {
        super("Comment");
    }

    override generateStatement(): string {
        if(this.text) {
            this.output = "// " + this.text;
        }
        return this.output;
    }
}

class Version extends BaseItem {
    minimum?: string = "";
    maximum?: string = "";

    constructor() {
        super("Version");
    }

    override generateStatement(): string {
        
        if(this.minimum && this.minimum.length >= 5) {
            if(this.maximum && this.maximum.length >= 5) {
                this.output = `pragma solidity >=${this.minimum} <${this.maximum};`;
            } else {
                this.output = `pragma solidity ^${this.minimum};`;
            }
        }
        return this.output;
    }
}

class ABICoderPragma extends BaseItem {
    version1?: boolean = true;

    constructor() {
        super("ABICoderPragma");
    }

    override generateStatement(): string {
        if(this.version1) {
            this.output = "pragma abicoder v1;";
        } else {
            this.output = "pragma abicoder v2;";
        }
        return this.output;
    }
}

class Import extends BaseItem {
    path?: string = "";
    identifier?: string = "";
    alias?: string = "";

    constructor() {
        super("Import");
    }

    override generateStatement(): string {
        if(this.path) {
            if(this.identifier && this.alias) {
                this.output = `import ${this.identifier} as ${this.alias} from ${this.path};`;
            } else if(this.identifier && !this.alias) {
                this.output = `import ${this.identifier} from ${this.path};`;
            } else if(!this.identifier && this.alias) {
                this.output = `import ${this.path} as ${this.alias};`;
            } else {
                this.output = `import ${this.path};`;
            }
        }
        return this.output;
    }
}

class Constant extends BaseItem {
    identifier?: string = "";
    type?: string = "";
    value?: string = "";

    constructor() {
        super("Constant");
    }

    override generateStatement(): string {
        if(this.identifier && this.type && this.value) {
            this.output = `${this.type} constant ${this.identifier} = ${this.type.toLocaleLowerCase() == "string" ? "'" + this.value + "'": this.value};`;
        }
        return this.output;
    }
}

class Contract extends BaseItem {
    abstract?: boolean = false;
    identifier?: string = "";
    inherits?: string[] = [];
    elements?: BaseItem[] = [];

    constructor() {
        super("Contract");
    }

    override generateStatement(): string {
        
        if(this.identifier) {
            if(this.abstract) {
                this.output += "abstract ";
            }

            this.output += `contract ${this.identifier} `;
            if(this.inherits && this.inherits.length > 0) {
                this.output += `is ${this.inherits.join(", ")} `;
            }
            this.output += "{\n";
            this.elements?.forEach(e => this.output += `${e.generateStatement()}\n\n`)
            this.output += "\n}\n\n";
        }
        return this.output;
    }
}

class Interface extends BaseItem {
    identifier?: string = "";
    inherits?: string[] = [];
    elements?: BaseItem[] = [];

    constructor() {
        super("Interface");
    }

    override generateStatement(): string {
        
        if(this.identifier) {
            this.output += `interface ${this.identifier} `;
            if(this.inherits && this.inherits.length > 0) {
                this.output += `is ${this.inherits.join(", ")} `;
            }
            this.output += "{\n";
            this.elements?.forEach(e => this.output += `${e.generateStatement()}\n\n`)
            this.output += "\n}";
        }
        return this.output;
    }
}

class Library extends BaseItem {
    identifier?: string = "";
    elements?: BaseItem[] = [];

    constructor() {
        super("Library");
    }

    override generateStatement(): string {
        
        if(this.identifier) {
            this.output += `library ${this.identifier} `;
        }
        this.output += "{\n";
        this.elements?.forEach(e => this.output += `${e.generateStatement()}\n\n`)
        this.output += "\n}";
        return this.output;
    }
}

class Constructor extends BaseItem {

    parameters?: Parameter[] = [];
    payable?: boolean = false;
    internal?: boolean = false;
    public?: boolean = false;
    block?: Block = new Block()

    constructor() {
        super("Constructor");
    }

    override generateStatement(): string {
        let paramList = this.parameters?.map(p => p.generateStatement());
        let paramListString = paramList?.join(", ");
        
        this.output = `constructor (${paramListString}) ${this.payable ? "payable" : ""} ${
            this.internal ? "internal" : ""} ${this.public ? "public" : ""}`;
        this.output += this.block?.generateStatement();
        return this.output;
    }
}

class Parameter extends BaseItem {
    type?: string = "";
    location?: string = "";
    identifier?: string = "";

    constructor() {
        super("Parameter");
    }

    override generateStatement(): string {
        if(this.type && this.location && this.identifier) {
            this.output = [this.type, this.location, this.identifier].join(" ");
        } else if(this.type && this.location && !this.identifier) {
            this.output = [this.type, this.location].join(" ");
        } else if(this.type && !this.location && !this.identifier) {
            this.output = this.type;
        } else if(this.type && !this.location && this.identifier) {
            this.output = [this.type, this.identifier].join(" ");
        }
        return this.output
    }
}

class Variable extends BaseItem {
    type?: string = "";
    location?: string = "";
    identifier?: string = "";

    constructor() {
        super("Variable");
    }

    override generateStatement(): string {
        if(this.type && this.location && this.identifier) {
            this.output = [this.type, this.location, this.identifier].join(" ");
        } else if(this.type && this.location && !this.identifier) {
            this.output = [this.type, this.location].join(" ");
        } else if(this.type && !this.location && !this.identifier) {
            this.output = this.type;
        } else if(this.type && !this.location && this.identifier) {
            this.output = [this.type, this.identifier].join(" ");
        }
        return this.output
    }
}

class StateVariable extends BaseItem {
    type?: string = "";
    visibility?: string = "";
    modifier?: string = "";
    identifier?: string = "";
    value?: string = "";

    constructor() {
        super("StateVariable");
    }

    override generateStatement(): string {
        if(this.type && this.identifier) {
            this.output = [this.type, this.visibility, this.modifier, this.identifier].join(" ");
            
            if(this.value) {
                this.output += ` = ${this.value};`;
            } else {
                this.output += ";";
            }
        }
        return this.output
    }
}

class Enum extends BaseItem {
    identifier?: string = "";
    values?: string[] = [];

    constructor() {
        super("Enum");
    }

    override generateStatement(): string {
        this.output = `enum ${this.identifier} { ${this.values?.join(", ")} }`;
        return this.output
    }
}

class StructMember extends BaseItem {
    type?: string = "";
    identifier?: string = "";

    constructor() {
        super("StructMember");
    }

    override generateStatement(): string {
        if(this.type && this.identifier) {
            this.output = `${this.type} ${this.identifier};`
        }
        return this.output
    }
}

class Struct extends BaseItem {
    identifier?: string = "";
    members?: StructMember[] = [];

    constructor() {
        super("Struct");
    }

    override generateStatement(): string {
        this.output = `struct ${this.identifier} {`;
        this.members?.forEach(m => this.output += `\n${m.generateStatement()}`)
        this.output += "\n}";
        return this.output
    }
}


class Function extends BaseItem {
    identifier?: string = "";
    parameters?: Parameter[] = [];
    visibility?: string = "";
    mutability?: string = "";
    virtual?: boolean = false;
    returns?: Parameter[] = [];
    block?: Block = new Block();

    constructor() {
        super("Function");
    }

    override generateStatement(): string {
        if(this.identifier) {
            this.output = `function ${this.identifier} (${this.parameters?.map(p => p.generateStatement()).join(", ")})`;
            if(this.visibility) {
                this.output += ` ${this.visibility}`;
            }
    
            if(this.mutability) {
                this.output += ` ${this.mutability}`;
            }
    
            if(this.virtual) {
                this.output += " virtual";
            }
    
            if(this.returns && this.returns.length > 0) {
                this.output += ` returns (${this.returns?.map(p => p.generateStatement()).join(", ")})`;
            }
            
            if(this.block?.expressions && this.block.expressions?.length > 0) {
                this.output += this.block.generateStatement();
            } else {
                this.output += ";";
            }
        }
        return this.output
    }
}


class Modifier extends BaseItem {
    identifier?: string = "";
    parameters?: Parameter[] = [];
    virtual?: boolean = false;
    block?: Block = new Block();

    constructor() {
        super("Modifier");
    }

    override generateStatement(): string {
        if(this.identifier) {
            this.output = `modifier ${this.identifier}`;
            if(this.parameters && this.parameters.length > 0) {
                this.output += ` (${this.parameters.map(p => p.generateStatement()).join(", ")})`;
            }

            if(this.virtual) {
                this.output += " virtual";
            }

            if(this.block?.expressions && this.block.expressions.length > 0) {
                this.output += this.block.generateStatement();
            } else {
                this.output += ";";
            }
        }
        return this.output
    }
}


class Fallback extends BaseItem {
    parameters?: Parameter[] = [];
    external?: boolean = false;
    mutability?: string = "";
    virtual?: boolean = false;
    returns?: Parameter[] = [];
    block?: Block = new Block();

    constructor() {
        super("Fallback");
    }

    override generateStatement(): string {
        this.output = `fallback (${this.parameters?.map(p => p.generateStatement()).join(", ")})`;
        if(this.external) {
            this.output += " external";
        }

        if(this.mutability) {
            this.output += ` ${this.mutability}`;
        }

        if(this.virtual) {
            this.output += " virtual";
        }

        if(this.returns && this.returns.length > 0) {
            this.output += ` returns (${this.returns?.map(p => p.generateStatement()).join(", ")})`;
        }
        
        if(this.block?.expressions && this.block.expressions?.length > 0) {
            this.output += this.block.generateStatement();
        } else {
            this.output += ";";
        }

        return this.output
    }
}


class Receive extends BaseItem {
    external?: boolean = false;
    payable?: boolean = false;
    virtual?: boolean = false;
    block?: Block = new Block();

    constructor() {
        super("Receive");
    }

    override generateStatement(): string {
        this.output = "receive ()";

        if(this.external) {
            this.output += " external";
        }

        if(this.payable) {
            this.output += " payable";
        }

        if(this.virtual) {
            this.output += " virtual";
        }

        if(this.block?.expressions && this.block.expressions.length > 0) {
            this.output += this.block.generateStatement();
        } else {
            this.output += ";";
        }

        return this.output
    }
}

class EventParameter extends BaseItem {
    identifier?: string = "";
    type?: string = "";
    indexed?: boolean = false;

    constructor() {
        super("EventParameter");
    }

    override generateStatement(): string {
        if(this.type) {
            this.output = this.type;
            if(this.indexed) {
                this.output += " indexed";
            }
            if(this.identifier) {
                this.output += ` ${this.identifier}`;
            }
        }
        return this.output
    }
}

class Event extends BaseItem {
    identifier?: string = "";
    parameters?: EventParameter[] = [];
    anonymous?: boolean = false;

    constructor() {
        super("Event");
    }

    override generateStatement(): string {
        if(this.identifier) {
            this.output = `event ${this.identifier} (${this.parameters?.map(p => p.generateStatement()).join(", ")})`;
            if(this.anonymous) {
                this.output += ` ${this.anonymous ? "anonymous": ""}`;
            }
            this.output += ";";
        }
        return this.output
    }
}

class ErrorParameter extends BaseItem {
    identifier?: string = "";
    type?: string = "";

    constructor() {
        super("Error");
    }

    override generateStatement(): string {
        if(this.type) {
            this.output = `${this.type} ${this.identifier}`;
        }
        return this.output
    }
}

class Error extends BaseItem {
    identifier?: string = "";
    parameters?: ErrorParameter[] = [];

    constructor() {
        super("Error");
    }

    override generateStatement(): string {
        if(this.identifier) {
            console.log(this.parameters);
            this.output = `error ${this.identifier} (${this.parameters?.map(p => p.generateStatement()).join(", ")});`;
            console.log(this.output);
        }
        return this.output
    }
}

class Using extends BaseItem {
    identifiers?: string[] = [];
    type?: string = "";
    global?: boolean = false;

    constructor() {
        super("Using");
    }

    override generateStatement(): string {
        if(!this.type) {
            this.type = "*";
        }
        if(this.type && this.identifiers && this.identifiers.length > 0) {
            if(this.identifiers?.length == 1) {
                this.output = `using ${this.identifiers[0]} for ${this.type} `;
            }

            if(this.identifiers?.length > 1) {
                this.output = `using { ${this.identifiers.join(", ")} } for ${this.type} `;
            }

            if(this.global) {
                this.output += "global";
            }

            this.output += ";";
        }
        return this.output
    }
}

class UserDefinedValueType extends BaseItem {
    identifier?: string = "";
    type?: string = "";

    constructor() {
        super("UserDefinedValueType");
    }

    override generateStatement(): string {
        if(this.identifier && this.type) {
            this.output = ["type", this.identifier, "is", this.type].join(" ") + ";";
        }
        return this.output
    }
}

// To Be Implemented
class Block extends BaseItem {
    expressions?: BaseItem[] = [];

    constructor() {
        super("Block");
    }

    override generateStatement(): string {
        this.output = " {\nBlock code comes here... \n}";
        return this.output
    }
}

export {
    BaseItem, License, Pragma, Comment, Constant, Version, ABICoderPragma, Variable, Error,
    Import, Contract, Interface, Library, Parameter, Block, Constructor, Modifier, Using,
    StructMember, Struct, Enum, StateVariable, Function, Fallback, Receive, Event,
    UserDefinedValueType, EventParameter, ErrorParameter
}