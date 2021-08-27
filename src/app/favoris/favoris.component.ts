import { Component, OnInit } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favs: any;
  items: Array<any> = []
  list: Array<any> = []

  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
    
    
  this.loadData();
    
  }


  loadData(){
    
      this.favs = localStorage.getItem('fav')
      if (this.favs){
        console.log("favs"+this.favs);
        this.items = this.favs.split(',').map((x:any) => Number(x))    
        console.log("items"+this.items.length);
    
    
        this.items.map(x => 
          this.dataservice.getAllImages(x).subscribe((data : any) =>{
              this.list.push(data)
          }));
      }
    
    
    
  }

  removefav(id: any){
    const newList = this.items.filter((element)=>Number(element)!==Number(id));
    localStorage.clear();

localStorage.setItem('fav', newList.toString());
this.favs=newList;
      if (this.favs){

        this.items = this.favs.split(',').map((x:any) => Number(x))  
    
    
        this.items.map(x => 
          this.dataservice.getAllImages(x).subscribe((data : any) =>{
              this.list.push(data)
          }));
      }

/*
      this.items.forEach((element,index)=>{
        if(element==id) this.items.splice(index,1);
     });

     console.log("items length"+this.items.length);

     if (this.items.length == 0){
      localStorage.clear();
      console.log("one element remaining"+this.items.length);



     }else{
      console.log("more than 1 element"+this.items.length);
      this.favs = []; 
      localStorage.setItem('fav', this.items.toString())



     }



     this.loadData();
     //window.location.reload();
*/


  }

}
