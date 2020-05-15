import { Empregado } from './../../common/empregado';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadoService } from 'src/app/services/empregado.service';

@Component({
  selector: 'app-update-empregado',
  templateUrl: './update-empregado.component.html',
  styleUrls: ['./update-empregado.component.css']
})
export class UpdateEmpregadoComponent implements OnInit {

  id: number;
  empregado: Empregado;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private empregadoService: EmpregadoService) { }

  ngOnInit() {
    this.empregado = new Empregado();

    this.id = this.route.snapshot.params['id'];
    
    this.empregadoService.getEmployee(this.id).subscribe(
      data => {
        console.log(data)
        this.empregado = data;
      }, error => console.log(error));
  }

  updateEmpregado() {
    this.empregadoService.updateEmployee(this.id, this.empregado).subscribe(
      data => console.log(data), error => console.log(error)
      );
    this.empregado = new Empregado();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmpregado();    
  }

  gotoList() {
    this.router.navigate(['/empregados']);
  }
}
