import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AfterExpression, AssignmentExpression, BeforeExpression, Expression, LiteralExpression } from 'src/app/grammer/source-unit';
import { AssignmentOperators, AfterOperators, BeforeOperators, LogicalOperators, CompareOperators } from 'src/app/constants/solidity-syntax';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Expression>();
  @Output() updateItemEvent = new EventEmitter<Expression>();
  @Input() item?: Expression;

  isAssignment: boolean = false;
  isAfter: boolean = false;
  isBefore: boolean = false;

  assignLiteral: string = "";
  leftLiteral: string = "";
  rightLiteral: string = "";

  assignOperator: string = "";
  leftOperator: string = "";
  rightOperator: string = "";

  assignOperators: any[] = AssignmentOperators;
  logicOperators: any[] = [...LogicalOperators, ...CompareOperators];
  beforeOperators: any[] = BeforeOperators;
  afterOperators: any[] = AfterOperators;



  constructor() { }

  ngOnInit(): void {
  }

  beforeChanged() {
    this.isAfter = false;
  }

  afterChanged() {
    this.isBefore = false;
    if(this.isAfter) {
      this.logicOperators = this.afterOperators;
    } else {
      this.logicOperators = [...LogicalOperators, ...CompareOperators];
    }
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    if(!this.item) {
      return;
    }
    
    if(this.isAssignment) {
      let literal = new LiteralExpression();
      literal.value = this.assignLiteral;
      
      this.item.leftExp = new AssignmentExpression();
      this.item.leftExp.leftExp = literal;
      this.item.operator = this.assignOperator;
    }

    if(this.isAfter) {
      let literal = new LiteralExpression();
      literal.value = this.leftLiteral;

      let afterExp = new AfterExpression();
      afterExp.literal = literal;

      afterExp.operator = this.rightOperator;
      this.item.rightExp = afterExp;
    } else if(this.isBefore) {
      let literal = new LiteralExpression();
      literal.value = this.leftLiteral;

      let beforeExp = new BeforeExpression();
      beforeExp.literal = literal;

      beforeExp.operator = this.leftOperator;
      this.item.rightExp = beforeExp;
    } else {
      let left = new LiteralExpression();
      left.value = this.leftLiteral;

      let right = new LiteralExpression();
      right.value = this.rightLiteral;

      let rightExp = new Expression("Logic");

      rightExp.operator = this.rightOperator;
      rightExp.leftExp = left;
      rightExp.rightExp = right;

      this.item.rightExp = rightExp;
    }

    this.updateItemEvent.emit(this.item);
  }

}
