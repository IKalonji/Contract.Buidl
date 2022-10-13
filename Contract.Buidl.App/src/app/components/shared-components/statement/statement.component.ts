import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompareExpression, DoWhileStatement, Expression, ForStatement, IfStatement, LiteralExpression, Statement, WhileStatement } from 'src/app/grammer/source-unit';
import { CompareOperators } from 'src/app/constants/solidity-syntax';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Statement>();
  @Output() updateItemEvent = new EventEmitter<Statement>();
  @Input() item!: Statement;

  operators: any [] = [
    { "Name": "AND", "Value": "&&" }, { "Name": "OR", "Value": "||" }, ...CompareOperators
  ];

  leftLiteral: string = "";
  rightLiteral: string = "";
  operator: string = "";

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.item);
  }

  optionChanged() {
    switch(this.item.type) {
      case "If":
        let ifStatement = new IfStatement();
        ifStatement.uuid = this.item.uuid;
        this.item = ifStatement;
        break;
      case "For":
        let forStatement = new ForStatement();
        forStatement.uuid = this.item.uuid;
        this.item = forStatement;
        break;
      case "While":
        let whileStatement = new WhileStatement();
        whileStatement.uuid = this.item.uuid;
        this.item = whileStatement;
        break;
      case "DoWhile":
        let doStatement = new DoWhileStatement();
        doStatement.uuid = this.item.uuid;
        this.item = doStatement;
        break;
    }
    this.item.expression = new CompareExpression();
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    if(this.leftLiteral) {
      let leftExp = new LiteralExpression();
      leftExp.value = this.leftLiteral;
      if(this.item.expression) {
        this.item.expression.leftExp = leftExp;
      }
    }

    if(this.operator) {
      if(this.item.expression) {
        this.item.expression.operator = this.operator;
      }
    }

    if(this.rightLiteral) {
      let rightExp = new LiteralExpression();
      rightExp.value = this.rightLiteral;
      if(this.item.expression) {
        this.item.expression.rightExp = rightExp;
      }
    }
    console.log(this.item);
    console.log(this.item.generateStatement());
    this.updateItemEvent.emit(this.item);
  }

  splitStringByCaps(text: string): string {
    return text.split(/(?=[A-Z][a-z])/).join(" ")
  }

}
