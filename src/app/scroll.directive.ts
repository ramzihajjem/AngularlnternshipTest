import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    console.log(123);
    
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("End");
    }
  }

  constructor() { }

}
