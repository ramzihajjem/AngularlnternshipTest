import { Component, OnInit, HostListener  } from '@angular/core';
import { DataService } from '../data.service';
import { loremIpsum } from "lorem-ipsum";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  showElement: boolean = true;

  items: any = [];
  sum = 12;  
  curScrollPos = 0;
  endReached = false; 
  photos: any;  
  start: number = 0;
  
  favs: any;
  fav: Array<any> = []
  list: Array<any> = []
  n: number = 0
  search: any = ''
  constructor(private dataservice : DataService) {
  }




  addItems(index: any, sum: Number) {  
    for (let i = index; i < sum; i++) {
      this.dataservice.getAllImages(i).subscribe((data : any) =>{
        let randomText = loremIpsum();
        console.log(randomText);
          this.items.push({...data,randomText})
      })
      
    }
    this.n++
  }
  onScrollDown() {  
    this.start = this.sum;  
    this.sum += 12; 
    console.log('down');
    this.addItems(this.start,this.sum)
  } 

  addFav(id: any){
    this.fav.push(id);
    localStorage.setItem('fav', this.fav.toString());
    this.ngOnInit()
  }

  removefav(id: any){
    const index = this.fav.indexOf(Number(id));

    this.fav.splice(index,1)
    
    localStorage.setItem('fav', this.fav.toString())
  }

  ngOnInit(): void {
    if (this.n==0) {
      this.addItems(0,this.sum)
    }
    this.favs = localStorage.getItem('fav')
    this.fav = this.favs.split(',').map((x:any) => Number(x)) 
  }

  checkfav(id: any){    
    return this.fav.includes(Number(id))
  }
  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    console.log(123);
    
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.onScrollDown()
    }
  }


  

}
