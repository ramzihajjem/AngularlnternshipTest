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
    this.favs = localStorage.getItem('fav')
    this.items = this.favs.split(',').map((x:any) => Number(x))    

    this.items.map(x => 
      this.dataservice.getAllImages(x).subscribe((data : any) =>{
          this.list.push(data)
      }));
    
    console.log(this.list);
    
  }

}
