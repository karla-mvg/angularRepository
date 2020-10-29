import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AnimalsService } from '../services/animals.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
dataSource = [];
displayedColumns = [ 'name','color','sexo','edad','active','actions' ];
  constructor(private animals: AnimalsService, private data: DataService,private router:Router,private snack: MatSnackBar) {
    this.loadData();
   }

  ngOnInit(): void {
  }

  loadData(): void{
    this.data.setLoading(true);
    this.animals.getAnimals().subscribe(res =>{
     this.dataSource = res;
      this.data.setLoading(false);
    }, err =>{
      this.data.setMessage("NO se pudo presentar la información");
    } );
  }

  edit(id: string): void{
console.log(id);
this.router.navigate(['animal-detail',id]);
  }

  delete(id:string): void{
    const confirm = this.snack.open('Estas seguro de eliminar el registro?','Sí',{
       duration: 3000
    });

 confirm.onAction().subscribe(() => {
    this.data.setLoading(true);
   this.animals.deleteAnimal(id).subscribe( res =>{
    this.data.setMessage("Se ha eliminado correctamente");
    this.data.setLoading(false);
    this.loadData();
   },err =>{
    this.data.setMessage("No se pudo eliminar");
    this.data.setLoading(false);
   });


  });

  }

}
