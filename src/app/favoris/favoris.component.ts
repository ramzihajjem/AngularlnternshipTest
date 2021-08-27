import { Component, OnInit } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DataService } from '../data.service';
import { loremIpsum } from "lorem-ipsum";

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
            let randomText = loremIpsum();
            this.list.push({...data,randomText})
          }));
      }
    
    
    
  }

  removefav(id: any){
    const index = this.list.findIndex((x:any)=> x.id == Number(id))
    console.log(index,Number(id));
    
    this.list.splice(index,1)

    const indexf = this.items.indexOf(Number(id));
    this.items.splice(indexf,1)
    localStorage.setItem('fav', this.items.toString())
  }

}
