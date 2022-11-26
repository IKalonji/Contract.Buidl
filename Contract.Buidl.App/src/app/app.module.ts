import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner'
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton'
import { ConfirmationService } from 'primeng/api'

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { CreateSolidityFileComponent } from './components/create-solidity-file/create-solidity-file.component';
import { ContractComponent } from './components/solidity-components/contract/contract.component';
import { LicenseComponent } from './components/solidity-components/license/license.component';
import { VersionComponent } from './components/solidity-components/version/version.component';
import { ImportComponent } from './components/solidity-components/import/import.component';
import { CommentComponent } from './components/solidity-components/comment/comment.component';
import { ConstantComponent } from './components/solidity-components/constant/constant.component';
import { PragmaComponent } from './components/solidity-components/pragma/pragma.component';
import { AbiCoderPragmaComponent } from './components/solidity-components/abi-coder-pragma/abi-coder-pragma.component';
import { LibraryComponent } from './components/solidity-components/library/library.component';
import { InterfaceComponent } from './components/solidity-components/interface/interface.component';
import { StateVariableComponent } from './components/contract-body-components/state-variable/state-variable.component';
import { ConstructorComponent } from './components/contract-body-components/constructor/constructor.component';
import { StructComponent } from './components/contract-body-components/struct/struct.component';
import { EnumComponent } from './components/contract-body-components/enum/enum.component';
import { FunctionComponent } from './components/contract-body-components/function/function.component';
import { ModifierComponent } from './components/contract-body-components/modifier/modifier.component';
import { FallbackComponent } from './components/contract-body-components/fallback/fallback.component';
import { ReceiveComponent } from './components/contract-body-components/receive/receive.component';
import { UserDefinedValueTypeComponent } from './components/contract-body-components/user-defined-value-type/user-defined-value-type.component';
import { EventComponent } from './components/contract-body-components/event/event.component';
import { ErrorComponent } from './components/contract-body-components/error/error.component';
import { UsingComponent } from './components/contract-body-components/using/using.component';
import { ParameterComponent } from './components/shared-components/parameter/parameter.component';
import { BlockComponent } from './components/shared-components/block/block.component';
import { BeforeExpressionComponent } from './components/shared-components/before-expression/before-expression.component';
import { AfterExpressionComponent } from './components/shared-components/after-expression/after-expression.component';
import { CompareExpressionComponent } from './components/shared-components/compare-expression/compare-expression.component';
import { LogicExpressionComponent } from './components/shared-components/logic-expression/logic-expression.component';
import { AssignmentExpressionComponent } from './components/shared-components/assignment-expression/assignment-expression.component';
import { LiteralExpressionComponent } from './components/shared-components/literal-expression/literal-expression.component';
import { ExpressionComponent } from './components/shared-components/expression/expression.component';
import { IfStatementComponent } from './components/shared-components/if-statement/if-statement.component';
import { ForLoopComponent } from './components/shared-components/for-loop/for-loop.component';
import { WhileLoopComponent } from './components/shared-components/while-loop/while-loop.component';
import { DoWhileLoopComponent } from './components/shared-components/do-while-loop/do-while-loop.component';
import { ContinueStatementComponent } from './components/shared-components/continue-statement/continue-statement.component';
import { BreakStatementComponent } from './components/shared-components/break-statement/break-statement.component';
import { ReturnStatementComponent } from './components/shared-components/return-statement/return-statement.component';
import { TryCatchStatementComponent } from './components/shared-components/try-catch-statement/try-catch-statement.component';
import { VariableComponent } from './components/shared-components/variable/variable.component';
import { StatementComponent } from './components/shared-components/statement/statement.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSolidityFileComponent,
    ContractComponent,
    LicenseComponent,
    VersionComponent,
    ImportComponent,
    CommentComponent,
    ConstantComponent,
    PragmaComponent,
    AbiCoderPragmaComponent,
    LibraryComponent,
    InterfaceComponent,
    StateVariableComponent,
    ConstructorComponent,
    StructComponent,
    EnumComponent,
    FunctionComponent,
    ModifierComponent,
    FallbackComponent,
    ReceiveComponent,
    UserDefinedValueTypeComponent,
    EventComponent,
    ErrorComponent,
    UsingComponent,
    ParameterComponent,
    BlockComponent,
    BeforeExpressionComponent,
    AfterExpressionComponent,
    CompareExpressionComponent,
    LogicExpressionComponent,
    AssignmentExpressionComponent,
    LiteralExpressionComponent,
    ExpressionComponent,
    IfStatementComponent,
    ForLoopComponent,
    WhileLoopComponent,
    DoWhileLoopComponent,
    ContinueStatementComponent,
    BreakStatementComponent,
    ReturnStatementComponent,
    TryCatchStatementComponent,
    VariableComponent,
    StatementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    DragDropModule,
    MatExpansionModule,
    MatTooltipModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule,
    TextFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    HttpClientModule,
    ConfirmDialogModule,
    DropdownModule,
    ProgressSpinnerModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
