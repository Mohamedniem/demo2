import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  bindData:string=''
  showsecretPassword=false;
  array:any=[]
  showColor=false

  makeEmpty(){
    if (this.bindData!=''){
      this.bindData=""
    }
  }
  toggleData(){
    this.showsecretPassword= !this.showsecretPassword

  }

  logclick(e:any){
    this.array.push(e.detail)
    console.log(this.array);
    
    if(this.array.length>=5){
      this.showColor=true
    }
  }



}
