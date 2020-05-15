import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { EmpregadoListComponent } from './components/empregado-list/empregado-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpregadoService } from './services/empregado.service';
import { AddEmpregadoComponent } from './components/add-empregado/add-empregado.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpregadoComponent } from './components/update-empregado/update-empregado.component';
import { DetailEmpregadoComponent } from './components/detail-empregado/detail-empregado.component';

const routes: Routes = [
  {path: 'add', component: AddEmpregadoComponent},
  {path: 'update/:id', component: UpdateEmpregadoComponent},
  {path: 'detail/:id', component: DetailEmpregadoComponent},
  {path: 'empregados', component: EmpregadoListComponent},
  {path: ' ', redirectTo: '/empregados', pathMatch: 'full'},
  {path: '**', redirectTo: '/empregados', pathMatch: 'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    EmpregadoListComponent,
    AddEmpregadoComponent,
    UpdateEmpregadoComponent,
    DetailEmpregadoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpregadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
