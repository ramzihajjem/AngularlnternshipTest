import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], search: string): any[] {
    if (!items) return [];
    if (!search) return items;
  
    return items.filter(item => {
      return Object.keys(item).some(key => {
        console.log(key);
        
        return String(item['id']).toLowerCase().includes(search.toLowerCase()) || String(item['author']).toLowerCase().includes(search.toLowerCase());
      });
    });
   }

}
