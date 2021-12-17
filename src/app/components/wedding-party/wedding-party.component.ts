import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { contentEX } from 'src/app/Interfaces/contentEx';
import { ContentService } from 'src/app/Services/content.service';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.scss']
})
export class WeddingPartyComponent implements OnInit {

  constructor(private content:ContentService) { }
  public lists=[];
  ngOnInit(): void {
    this.content.GetAllProducts4().subscribe(data=>this.lists=data); 
    this.prods=JSON.parse(localStorage.getItem('prods'));

  }
  public prods;
  p(list)
  { 
    
    if(localStorage.getItem('prods')===null)
    {
      this.prods=[];
    }
    else
    {
      this.prods=JSON.parse(localStorage.getItem('prods'));
    }
    this.prods=Array.from(this.prods) ;
   this.prods.push(list);
    localStorage.setItem('prods',JSON.stringify(this.prods)); 
  }

    
   
  

}
