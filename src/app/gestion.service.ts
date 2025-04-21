import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }

  getAllRestaurants(){
    return this.http.get("http://127.0.0.1:8080/back/restaurants");
  }

  getAllItemMenuByRest(id:number){
    return this.http.get("http://127.0.0.1:8080/back/menu/restaurant/"+id);
  }

  addRestaurant(rest:any){
    return this.http.get("http://127.0.0.1:8080/back/addRestaurants",rest);
  }

  addItemMenu(item:any){
    return this.http.get("http://127.0.0.1:8080/back/addMenu",item);
  }

  deleteRestaurent(id:number){
    return this.http.get("http://127.0.0.1:8080/back/deleteRestaurant/"+id);
  }

  deleteItem(id:number){
    return this.http.get("http://127.0.0.1:8080/back/deleteItem/"+id);
  }
}
