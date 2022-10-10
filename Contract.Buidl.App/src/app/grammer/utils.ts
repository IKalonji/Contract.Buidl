import { ValueConverter } from "@angular/compiler/src/render3/view/template";

const CommaSeparatedValues = function GenerateCommaSeparatedValues(list: any[]): string {
    let output = "";

    let i: number;
    for(i = 0; i < list.length; i++) {
        if(i == (list.length -1)) {
            output += list[i];
            break;
        }
        output += list[i] + ", "
    }
    return output;
}

const PrependWhiteSpace = function GeneratePrependWhiteSpace(value: string): string {
    if(value) {
        return ` ${value}`;
    } else {
        return value;
    }
}

const SplitStringByCaps = function splitStringByCaps(text: string): string {
  return text.split(/(?=[A-Z])/).join(" ");
}

export {
    CommaSeparatedValues, PrependWhiteSpace, SplitStringByCaps
}