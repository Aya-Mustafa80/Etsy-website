import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  public prods;
  public v;
  public e :boolean=false;
  public eo:boolean=true;
  ngOnInit(): void {
     this.prods=JSON.parse(localStorage.getItem('prods'));
 
    if(localStorage.getItem('prods')===null)
    {
      this.v=0;
    }
    else
    {       this.v=this.prods.length;
    }
    if (this.v===0)
    {
      this.e=true;
      this.eo=false;
    }
  }
  h()
  {
    if (this.v===0)
    {
      this.e=true;
      this.eo=false;
    }
    else
    {
      this.e=false;
      this.eo=true;
    }
  }
  c()
  { 
    this.v=0;
    this.h();
    localStorage.clear();
  }

}
