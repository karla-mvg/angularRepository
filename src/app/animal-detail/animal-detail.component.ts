import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
formAnimal: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formAnimal= this.fb.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    sexo: ['', Validators.required],
    edad: ['', Validators.required],
    active: ['', Validators.required]

    });

  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.formAnimal.value);
  }

}
