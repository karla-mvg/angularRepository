import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalsService } from '../services/animals.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
formAnimal: FormGroup;
isLoading = false;
title = '';
id;
  constructor(private fb: FormBuilder,private animals: AnimalsService,private data: DataService, private router: Router,
    private route: ActivatedRoute) {

      this.route.params.subscribe(p => {
        if(p.id){
          this.id=p.id;
          this.title = "Editar elemento";
          console.log("EDICION");
          this.animals.getAnimal(p.id).subscribe(res =>{
           this.formAnimal.patchValue(res);
          }, err =>{
            this.data.setMessage("Ocurrió error al obtener la información");
          });
        }else{
          this.title = "Crear elemento";
          console.log("NUEVO");
        }
      });

    this.formAnimal= this.fb.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    sexo: ['', Validators.required],
    edad: ['', Validators.required],
    active: ['', Validators.required]

    });

    this.data.getLoading().subscribe(loading=> {
      this.isLoading = loading;
    });

  }

  ngOnInit(): void {
  }

  save(): void{
    const dataAnimal =this.formAnimal.value;
    if(this.id){
      this.data.setLoading(true);
      this.animals.editAnimal(this.id,dataAnimal).subscribe( res=>{
        this.data.setLoading(false);
        this.data.setMessage('Los datos se enviaron correctamente');
        this.router.navigate(['animals']);
      },err => {
        this.data.setLoading(false);
        this.data.setMessage('Ocurrió un error en edición');
      }

      );

    }else{

      this.data.setLoading(true);
      this.animals.createAnimal(dataAnimal).subscribe(res =>{
        console.log(res);
        this.data.setLoading(false);
        this.data.setMessage('Los datos se enviaron correctamente');
        this.router.navigate(['animals']);
      },err => {
        this.data.setLoading(false);
        this.data.setMessage('Ocurrio un error');
      });

    }

  }

}
