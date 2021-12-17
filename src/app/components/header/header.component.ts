import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public prods;
  public x;
  constructor() { }
  public show:boolean = false;


  toggle() {
    this.show = !this.show;

  }
  toggle2() {
    var em =  $("#emailHelp").val();
    var ps =  $("#Password1").val();
    if(em!="" && ps!=""){
    alert("done");
    this.show = !this.show;
    }
    else{
      alert("please enter your information");
    }

  }
  forget(){
    prompt("please enter phone number or email","");
    this.show = !this.show;
  }
  Register(){
    var em = prompt("please enter email","");
    var ps = prompt("please enter password","");
    alert("Welcome in our site");
    this.show = !this.show;
  }
  ngOnInit(): void {
    this.prods= JSON.parse(localStorage.getItem('prods'));
    if(localStorage.getItem('prods')===null)
    {
      this.x=0;
    }
    else
    {       this.x=this.prods.length;
    }
  }
}
