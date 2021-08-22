import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  public getAllImages(id: Number){
    return this.httpClient.get(`https://picsum.photos/id/${id}/info`)
  }
}
