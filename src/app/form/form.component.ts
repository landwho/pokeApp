import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('fileInput')
  el!: ElementRef;
  imageUrl: any = "assets/user_image.png";
  editFile: boolean = true;
  removeUpload: boolean = false;

  age:any;
  cui="";
  name="";
  selected:any;
  date="";
  obj:any;
  hobbie={
    select:""
  }
  user:any;
  error:any

  exp=/([0-9]{8}-{1})\w+/i;

  hobbies=[
    {"name":"Jugar Futbol"},
    {"name":"Jugar Basketball"},
    {"name":"Jugar tenis"},
    {"name":"Jugar Voleiball"},
    {"name":"Jugar Fifa"},
    {"name":"Jugar Videojuegos"},
  ]

  constructor(
    private cookieService: CookieService, 
    private router: Router,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  cookieValue:any;
  ngOnInit(): void {

    this.cookieValue = this.cookieService.get('Test');
    this.user =  localStorage.getItem('user');
    this.age = localStorage.getItem('age');

  }


  continue(){

    let d = new Date(this.date);
    let currentDate = Number(new Date().getFullYear());
    let ser = Number(d.getFullYear());
    let myAge = currentDate - ser
    let validator = this.exp.test(this.cui)
 
    this.obj= {
      "name":this.name,
      "hobbie":this.hobbie.select,
      "date":myAge,
      "cui":this.cui,
      "file":this.registrationForm.value.file
    }
     
    if(this.name!="" && this.date!="" && this.cui!="" && this.registrationForm.value.file!=null && validator!=false){
      localStorage.setItem('user', JSON.stringify(this.obj));
      this.router.navigate(['choose']);
    }else{
      if(this.name==""){ this.error="Ingresa tu nombre"}
      if(this.date==""){ this.error="Ingresa tu fecha de cumpleaños"}
      if(validator==false || this.cui==""){ this.error="DUI invalido"}
      if(this.registrationForm.value.file==null){ this.error="Selecciona una fotografia"}
    }

  }

  continue2(){
  
    this.obj= {
      "name":this.name,
      "hobbie":this.hobbie.select,
      "date":this.date,
      "file":this.registrationForm.value.file
    }
     
    if(this.name!="" && this.hobbie.select!="" && this.date!="" && this.registrationForm.value.file!=null){
      localStorage.setItem('user', JSON.stringify(this.obj));
      this.router.navigate(['choose']);
    }else{
      if(this.name==""){ this.error="Ingresa tu nombre"}
      if(this.date==""){ this.error="Ingresa tu fecha de cumpleaños"}
      if(this.registrationForm.value.file==null){ this.error="Selecciona una fotografia"}
    }

  }

  registrationForm = this.fb.group({ file: undefined })  

  uploadFile(event:any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
           file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      this.cd.markForCheck();        
    }
  }

  onSubmit() {
    if(!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
    }
  }

}