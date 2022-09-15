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
            this.output = `${this.type} constant ${this.identifier} = ${this.value};`;
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
            this.output += "\n}";
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
    block?: Block = new Block()

    constructor() {
        super("Constructor");
    }

    override generateStatement(): string {
        let paramList = this.parameters?.map(p => p.generateStatement());
        let paramListString = paramList?.join(", ");
        this.output = `constructor (${paramListString}) `;
        if(this.payable) {
            this.output += "payable ";
        }
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
    visibity?: string = "";
    modifier?: string = "";
    identifier?: string = "";
    value?: string = "";

    constructor() {
        super("Variable");
    }

    override generateStatement(): string {
        if(this.type && this.identifier) {
            this.output = [this.type, this.visibity, this.modifier, this.identifier].join(" ");
            
            if(this.value) {
                this.output += ` = ${this.value};`;
            } else {
                this.output += ";";
            }
        }
        return this.output
    }
}

class Block extends BaseItem {

    constructor() {
        super("Block");
    }

    override generateStatement(): string {
        this.output = " {\nBlock code comes here... \n}";
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

// To Be Implemented
class Function extends BaseItem {
    identifier?: string = "";

    constructor() {
        super("Function");
    }

    override generateStatement(): string {
        return this.output
    }
}

// To Be Implemented
class Modifier extends BaseItem {
    identifier?: string = "";

    constructor() {
        super("Modifier");
    }

    override generateStatement(): string {
        return this.output
    }
}

// To Be Implemented
class Fallback extends BaseItem {
    identifier?: string = "";

    constructor() {
        super("Fallback");
    }

    override generateStatement(): string {
        return this.output
    }
}

// To Be Implemented
class Receive extends BaseItem {
    identifier?: string = "";

    constructor() {
        super("Receive");
    }

    override generateStatement(): string {
        return this.output
    }
}

// To Be Implemented
class Event extends BaseItem {
    identifier?: string = "";

    constructor() {
        super("Event");
    }

    override generateStatement(): string {
        return this.output
    }
}

// To Be Implemented
class Error extends BaseItem {
    identifier?: string = "";

    constructor() {
        super("Error");
    }

    override generateStatement(): string {
        return this.output
    }
}

// To Be Implemented
class Using extends BaseItem {
    identifier?: string = "";

    constructor() {
        super("Using");
    }

    override generateStatement(): string {
        return this.output
    }
}

// To Be Implemented
class UserDefinedValueType extends BaseItem {
    identifier?: string = "";

    constructor() {
        super("UserDefinedValueType");
    }

    override generateStatement(): string {
        return this.output
    }
}

export {
    BaseItem, License, Pragma, Comment, Constant, Version, ABICoderPragma, Variable, Error,
    Import, Contract, Interface, Library, Parameter, Block, Constructor, Modifier, Using,
    StructMember, Struct, Enum, StateVariable, Function, Fallback, Receive, Event,
    UserDefinedValueType
}