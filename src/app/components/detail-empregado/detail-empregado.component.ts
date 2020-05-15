import { Empregado } from './../../common/empregado';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadoService } from 'src/app/services/empregado.service';

@Component({
  selector: 'app-detail-empregado',
  templateUrl: './detail-empregado.component.html',
  styleUrls: ['./detail-empregado.component.css']
})
export class DetailEmpregadoComponent implements OnInit {

  id: number;
  empregado: Empregado;

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

  list(){
    this.router.navigate(['empregados']);
  }

}
