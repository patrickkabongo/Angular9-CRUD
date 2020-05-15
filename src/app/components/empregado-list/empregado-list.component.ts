import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from 'src/app/services/empregado.service';
import { Empregado } from 'src/app/common/empregado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empregado-list',
  templateUrl: './empregado-list.component.html',
  styleUrls: ['./empregado-list.component.css']
})
export class EmpregadoListComponent implements OnInit {

  empregados: Empregado[];
  searchMode: boolean = false;


  constructor(private empregadoService: EmpregadoService, private route:ActivatedRoute) { }

  ngOnInit(): void {    
      this.listEmpregados();
  }

  listEmpregados() {
    this.empregadoService.getEmployeeList().subscribe(
      data => {
        this.empregados = data;
      }
    )
  }

  deleteEmployee(id: number) {
    this.empregadoService.deleteEmployee(id).subscribe(
        data => {
          console.log(data);
          this.listEmpregados();
        },
        error => console.log(error));
  }

}
