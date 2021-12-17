import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { contentEX } from 'src/app/Interfaces/contentEx';
import { ContentService } from 'src/app/Services/content.service';

@Component({
  selector: 'app-jewelr-accessories',
  templateUrl: './jewelr-accessories.component.html',
  styleUrls: ['./jewelr-accessories.component.scss']
})
export class JewelrAccessoriesComponent implements OnInit {

  constructor(private content:ContentService) { }
  public lists=[];
   public prods;
  ngOnInit(): void {
    this.content.GetAllProducts6().subscribe(data=>this.lists=data); 
    this.prods=JSON.parse(localStorage.getItem('prods'));

  }
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
