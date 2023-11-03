import { NgModule } from "@angular/core";
import { AlunosComponent } from "./alunos.component";
import { CommonModule } from "@angular/common";
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from "./alunos-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  exports:[],
  declarations:[
    AlunosComponent,
    AlunosFormComponent,
    AlunosDetalheComponent
  ],
  providers:[]
})

export class AlunosModule {}

