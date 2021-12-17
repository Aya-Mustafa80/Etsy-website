import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { contentEX } from 'src/app/Interfaces/contentEx';
import { ContentService } from 'src/app/Services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private content:ContentService) { }
  public lists=[];
  public lists2=[];
  
  ngOnInit(): void {
    this.content.GetAllProducts().subscribe(data=>this.lists=data); 
    this.content.GetAllProducts2().subscribe(data=>this.lists2=data);
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
