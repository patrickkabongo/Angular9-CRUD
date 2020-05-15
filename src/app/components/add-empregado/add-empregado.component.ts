import { EmpregadoService } from 'src/app/services/empregado.service';
import { Empregado } from 'src/app/common/empregado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-empregado',
  templateUrl: './add-empregado.component.html',
  styleUrls: ['./add-empregado.component.css']
})
export class AddEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();
  submitted = false;

  constructor(private empregadoService: EmpregadoService, private router: Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.empregado = new Empregado();
  }

  save() {
    this.empregadoService.createEmployee(this.empregado).subscribe(
      data => console.log(data), error => console.log(error)
      );
    this.empregado = new Empregado();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/empregados']);
  }

}
